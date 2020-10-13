const debug = require('debug')('app:fileCleaner');
const fs = require('fs');

const File = require('../models/File');

const db = require('../config/db');
db.connectDatabase();

const clean = async (req, res) => {
  const fileValidity = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const files = await File.find({ createdAt: { $lt: fileValidity } });
  if (files.length) {
    for (const file of files) {
      try {
        fs.unlinkSync(file.path);
        await file.remove();
        debug(`${file.filename} has been deleted successfully`);
      } catch (error) {
        debug(`Error while removing ${file.filename}`);
      }
    }
  }

  return res.status(200).json({ message: 'Task Completed' });
};

module.exports = { clean };
