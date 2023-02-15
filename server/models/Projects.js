const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        Type: String,
    },
    description: {
        type: String, 
    },
    status: {
        type: String,
        enum: ['Not Started','In Progess', 'Completed']
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model('Client', ProjectSchema);