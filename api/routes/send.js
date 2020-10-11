const router = require('express').Router();
const SendController = require('../controllers/Send');

router.post('/', SendController.send);

module.exports = router;
