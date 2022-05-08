const express = require('express');
const router  = express.Router(); 

const userController = require('../controllers/user'); 
router.post('/user', userController.newUser);
router.post('/user/:airportCode', userController.assignUserToAirport);
module.exports = router;
