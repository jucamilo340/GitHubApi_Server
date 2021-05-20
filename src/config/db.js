  
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.variables' });

const conectarDB = async () => {
    try {
        //conecct DB 
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Connected');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1); 
    }
}

module.exports = conectarDB;