const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true,
    },

    streetAddress: {
        type: String,
        required: true
    }
})

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

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

    address: {
        required: false,

    },

    role: {
        type: String,
        default: 'client',
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

const clientModel = mongoose.model('User', clientSchema)

module.exports = clientModel

