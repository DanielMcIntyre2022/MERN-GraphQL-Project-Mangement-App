const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        Type: String,
    },
    email: {
        type: String, 
    },
    phone: {
        type: String
    },
});

module.exports = mongoose.model('Client', ClientSchema);