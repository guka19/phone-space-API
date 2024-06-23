const mongoose = require('mongoose')

const moderatorSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        default: 'moderator',
        immutable: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {
    collection: 'users',
    timestamps: true,
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    },
    read: 'nearest'
});

const moderatorModel = mongoose.model('User', moderatorSchema)

module.exports = moderatorModel