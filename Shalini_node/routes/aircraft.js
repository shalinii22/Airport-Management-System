const express = require('express');
const router  = express.Router(); 
 
const aircraftController = require('../controllers/aircraft'); 

router.post('/aircraft', aircraftController.newAircraft); 
router.get('/aircraft/:airlinesCode', aircraftController.getAircraftByAirlinesCode);
router.delete('/aircraft/delete/:uniqueId', aircraftController.deleteAircraft); 

module.exports = router;