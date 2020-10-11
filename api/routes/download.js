const router = require('express').Router();
const DownloadController = require('../controllers/Download');

router.get('/:link', DownloadController.downloadFile);

module.exports = router;
