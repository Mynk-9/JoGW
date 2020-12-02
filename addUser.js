const User = require('./models/user.js');
const connect = require('./dbconfig/connect');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

require('dotenv').config();

function input(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

(async () => {
  await connect();
  const email = await input('Enter email: ');
  const name = await input('Enter name: ');
  const bitsId = await input('Enter BITS ID: ');
  let newuser = await User({ email, bitsId, name, permissionLevel: 0 });
  await newuser.save();
  console.log('Done!');
  process.exit(0);
})();
