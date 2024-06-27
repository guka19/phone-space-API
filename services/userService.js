const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports = {
  register: async (req, res) => {
    try {

      const exists = await userModel.findOne({
        email: req.body.email,
      });

      if (exists) {
        return res.status(409).json({
          message: "user_already_exists",
        });
      }

      const hashPassword = bcrypt.hashSync(req.body.password, 10);

      const savedUser = await new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address,
        role: 'admin'
      }).save();

        const token = jwt.sign(
          {
            id: savedUser._id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            userName: savedUser.userName,
            email: savedUser.email,
            address: savedUser.address,
            role: savedUser.role
          },
          process.env.SECRET_KEY
        );

      res.json({ token });
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  },

  login: async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({
                message: 'user_not_found'
            });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            
                const token = jwt.sign(
                  {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userName: user.userName,
                    email: user.email,
                    address: user.address,
                    role: user.role
                  },
                  process.env.SECRET_KEY
                );

              res.json({ token });
        } else {
            return res.status(404).json({
                message: 'user_not_found'
            });
        }
    } catch (err) {
        res.status(500).send(err)
    }
  }
};
