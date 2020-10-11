const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
  {
    filename: { type: String, require: true },
    path: { type: String, require: true },
    size: { type: Number, require: true },
    link: { type: String, require: true },
    sender: { type: String, require: false },
    receiver: { type: String, require: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('file', fileSchema);
