const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
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
        default: 'admin',
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

const adminModel = mongoose.model('User', adminSchema)

module.exports = adminModel