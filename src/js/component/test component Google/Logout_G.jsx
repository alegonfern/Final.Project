import React from 'react';
import { GoogleLogout } from 'react-google-login';
const client_id = '743589702684-iib3esmu84iird198vc564vs8og5rhjp.apps.googleusercontent.com';


function Logout_G() {

    const onSuccess = () => {
        console.log("Logout exitoso");

    }

    return (<>
        <div id="signOutButton">

            <GoogleLogout
                clientId={client_id}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />

        </div> </>
    )

};

export default Logout_G;