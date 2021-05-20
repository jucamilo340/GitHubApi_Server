  
const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },    
    DateRegister: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UsuariosSchema);