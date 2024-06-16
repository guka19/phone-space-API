const smartphoneModel = require('../models/smartphone')

module.exports = {
    getAll: (req, res) => {
        smartphoneModel.find({})
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(500).json(error)
            })
    },

    getById: async (req, res) => {
        try {
            const item = await smartphoneModel.findById(req.params.id);
            res.json(item)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    add: async (req, res) => {
        try {
            const savedItem = await new smartphoneModel(req.body).save();
            res.json(savedItem);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    delete: async (req, res) => {
        try {
            await smartphoneModel.deleteOne({  _id: req.params.id });
            res.json({ success: true })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    update: async (req, res) => {
        try {
            const item = await studentModel.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                {
                    new: true
                }
            )
        } catch (error) {
            res.status(500).json(error);
        }
    }
}