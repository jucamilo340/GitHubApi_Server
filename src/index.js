const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

// Create server
const app = express();

//  cors
app.use(cors());

app.use(express.json())

// Connect DB
conectarDB();

//import routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/repositories', require('./routes/Repositories.routes'));

//  express.json
app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000;

// run app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});