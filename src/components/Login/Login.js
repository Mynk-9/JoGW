import React from 'react';
import '../personal/personal.css';
// import { GoogleLogin, useGoogleLogout } from 'react-google-login';

// const clientId =
//   '962832623705-a7nlpkt0ps3bo3rdsov390bppfifrrp0.apps.googleusercontent.com';

function Login() {
  //   const onLogoutSuccess = (res) => {
  //     console.log('Logged out');
  //   };

  //   const { signOut } = useGoogleLogout({
  //     clientId,
  //     onLogoutSuccess,
  //   });

  //   const onSuccess = (res) => {
  //     var email = res.profileObj.email;
  //     var str = email.match(/@goa.bits-pilani.ac.in/i);
  //     if (str === null) {
  //       signOut();
  //       alert('Login using BITS mail only');
  //       alert('Logged out');
  //     } else console.log(res);
  //   };

  //   const onFailure = (err) => {
  //     console.log(err);
  //   };

  return (
    <div>
      {/* <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ position: 'absolute', top: '50%' }}
        isSignedIn={true}
      /> */}
      <div>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=125310704983-vdns6gu4872lcp00dssddhvaaocbgv3j.apps.googleusercontent.com&redirect_uri=http%3A//localhost%3A3000/home&response_type=code&scope=https%3A//www.googleapis.com/auth/userinfo.email&hd=goa.bits-pilani.ac.in&prompt=consent">
          Login with Google
        </a>
      </div>
    </div>
  );
}

export default Login;
