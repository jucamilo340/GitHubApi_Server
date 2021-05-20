  
const mongoose = require('mongoose');

const RepositoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: String,
        required: true,
        trim: true
    },
    isPrivate: {
        type: Boolean,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Repository', RepositoriesSchema);