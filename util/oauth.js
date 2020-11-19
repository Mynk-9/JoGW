const fetch = require('node-fetch');
const FormData = require('form-data');
const jwt = require('jsonwebtoken');

const client_id = process.env.CLIENTID;
const client_secret = process.env.CLIENTSECRET;

// Login redirect URI
// https://accounts.google.com/o/oauth2/v2/auth?client_id=125310704983-vdns6gu4872lcp00dssddhvaaocbgv3j.apps.googleusercontent.com&redirect_uri=http%3A//localhost%3A3000/home&response_type=code&scope=https%3A//www.googleapis.com/auth/userinfo.email&hd=goa.bits-pilani.ac.in&prompt=consent

async function oauthpipeline(req, next) {
  try {
    // get the code/error from Google OAuth
    const { code, error } = req.query;

    // if error, stop
    if (error) {
      next(error);
      return;
    }

    // Use the code to obtain access token
    const authData = {
      code,
      client_id,
      client_secret,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/home',
    };

    // Send code to google to get back identity
    const authDataForm = new FormData();
    for (let prop in authData) {
      authDataForm.append(prop, authData[prop]);
    }

    let tokens = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: authDataForm,
    });

    // Tokens retrieved
    tokens = await tokens.json();
    if (tokens.error) {
      next(tokens.error);
      return;
    }

    // Get the identity from the tokens
    const userData = jwt.decode(tokens.id_token);
    return userData.email;
  } catch (err) {
    next(err);
  }
}

module.exports = oauthpipeline;
