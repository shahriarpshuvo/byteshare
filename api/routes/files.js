const router = require('express').Router();
const { customRandom, urlAlphabet, random } = require('nanoid');
const File = require('../models/file');
const fileUploader = require('../middleware/fileUploader');

const nanoid = customRandom(urlAlphabet, 10, random);

router.post('/', fileUploader, async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Upload must be valid.' });
  const { filename, path, size } = req.file;
  const file = await new File({
    filename,
    path,
    size,
    shortLink: nanoid()
  }).save();
  res
    .status(200)
    .json({ success: 'File uploaded Successfully', link: `${process.env.PUBLIC_URL}/files/${file.shortLink}` });
});

module.exports = router;
