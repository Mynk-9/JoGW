import React, { useEffect, useState } from 'react';
import Personal from '../personal/personal';
// import { GoogleLogout } from 'react-google-login';

// const clientId =
//   '962832623705-a7nlpkt0ps3bo3rdsov390bppfifrrp0.apps.googleusercontent.com';

function Logout() {
  const [name, setName] = useState('');
  const [bitsId, setBitsId] = useState('');

  useEffect(() => {
    const url = window.location.href;

    if (url.includes('?code=')) {
      const code = url.split('?code=')[1].split('&scope=')[0];
      if (code) {
        async function fetchData() {
          try {
            const { ok, token } = await (
              await fetch(
                `http://localhost:5000/api/user/oauthlogin?code=${code}`,
                {
                  method: 'GET',
                  'Content-Type': 'application/json',
                }
              )
            ).json();

            if (!ok) {
              // window.location.href = '/';
            } else {
              localStorage.setItem('token', token);
              const { name, bitsId } = JSON.parse(atob(token.split('.')[1]));
              setName(name);
              setBitsId(bitsId);
            }
          } catch (error) {
            console.log(error);
          }
        }

        fetchData();
      }
    }
  }, []);

  // const onSuccess = (res) => {
  //   console.log('Logged out');
  // };

  return (
    <div>
      {/* <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      /> */}
      Success
      <Personal name={name} bitsId={bitsId} />
    </div>
  );
}

export default Logout;
