const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid').nanoid();

const FileUploader = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => {
      cb(null, `${file.originalname.split('.')[0]}-${nanoid}${path.extname(file.originalname)}`);
    }
  });
  const upload = multer({
    storage,
    limits: {
      fileSize: 1000000 * 100
    }
  }).single('uploadFile');

  upload(req, res, err => {
    if (err) return res.status(500).json({ error: 'Something went wrong while upload!' });
    next();
  });
};

module.exports = FileUploader;
