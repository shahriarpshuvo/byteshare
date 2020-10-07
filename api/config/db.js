const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });

  const db = mongoose.connection;
  db.once('open', () => console.log('📦 Connected to Database'));
  db.on('error', err =>
    console.error('🔴 Error while connect to Database', err)
  );
};

module.exports = { connectDatabase };
