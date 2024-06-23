    const clientModel = require("../models/client");
    const moderatorModel = require("../models/moderator");
    const adminModel = require("../models/admin");

    const bcrypt = require("bcrypt");
    const jwt = require("json-web-token");

    module.exports = {
    clientRegister: async (req, res) => {
        try {
        if (
            !req.body.firstName ||
            !req.body.lastName ||
            !req.body.userName ||
            !req.body.email ||
            !req.body.role ||
            !req.body.password
        ) {
            return res.status(400).json({
            message: "required_fields_are_missing",
            });
        }

        const exists = await clientModel.findOne({
            userName: req.body.userName,
        });

        if (exists) { 
            return res.status(409).json({
            message: "user_already_exists",
            });
        }

        const hashPassword = bcrypt.hashSync(req.body.password, 10);

        const savedClient = await new clientModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: hashPassword,
            address: req.body.address
        }).save()

        let token;

        if (savedClient.address) {
            token = jwt.sign({
                id: savedClient._id,
                firstName: savedClient.firstName,
                lastName: savedClient.lastName,
                userName: savedClient.userName,
                email: savedClient.email,
                address: savedClient.address
            }, process.env.SECRET_KEY)
        } else {
            token = jwt.sign({
                id: savedClient._id,
                firstName: savedClient.firstName,
                lastName: savedClient.lastName,
                userName: savedClient.userName,
                email: savedClient.email,
            }, process.env.SECRET_KEY)
        }
        
        res.json({ token })

        } catch (err) {
        res.status(500).send(err);
        }
    },
    };
