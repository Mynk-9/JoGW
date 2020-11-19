const mongoose = require('mongoose');

async function connect() {
  try {
    const url = process.env.MONGOURL || 'mongodb://localhost:27017/jogw';
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to \x1b[32mDatabase\x1b[0m');
    return 0;
  } catch (err) {
    console.log('ERROR: Could not connect to database: ', err);
    process.exit(1);
  }
}

module.exports = connect;
