const router = require('express').Router();
const FileController = require('../controllers/File');
const FileUploader = require('../middleware/FileUploader');

router.get('/:link', FileController.getFile);
router.post('/', FileUploader, FileController.saveFile);

module.exports = router;
