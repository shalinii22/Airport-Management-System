const express = require('express');
const router  = express.Router(); 

const runwayController = require('../controllers/runway'); 
router.post('/runway', runwayController.newRunway);
router.get('/runway/:airportCode', runwayController.getRunwayByAirportCode);
module.exports = router;
