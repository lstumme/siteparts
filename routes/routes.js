const express = require('express');

const basicController = require('../controllers/basiccontroller');

const router = express.Router();


// Add other routes BEFORE this
router.get('/', basicController.getIndex);


module.exports = router;