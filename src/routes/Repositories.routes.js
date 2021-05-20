//Repositories routes
const express = require('express');
const router = express.Router();
const RepositoriesController = require('../controllers/RepositoriesController');

//api/repositories/Add
router.post('/Add', 
 RepositoriesController.AddFavorites
);

//api/repositories/
router.post('/', 
 RepositoriesController.getFavorites
);

//api/repositories/delete
router.delete('/delete', 
 RepositoriesController.RemoveFavorites
);

module.exports = router;