import React from 'react';
import { GoogleLogin } from 'react-google-login';

const client_id = '743589702684-iib3esmu84iird198vc564vs8og5rhjp.apps.googleusercontent.com';

function Login_G() {

    const onSuccess = (res) => {
        console.log("Login exitoso. Usuario: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login fallido, detalle: ", res);

    }


    return (<>
        <div id="signInButton">
            <GoogleLogin
                clientID={client_id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single-host-origin'}
                isSignedIn={true}

            />
        </div></>
    )
}
export default Login_G;