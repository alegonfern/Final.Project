import React from 'react';
import Login_G from './Login_G';
import Logout_G from './Logout_G';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const client_id = '743589702684-iib3esmu84iird198vc564vs8og5rhjp.apps.googleusercontent.com';


const Google_test = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: client_id,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);

    });

    return (
        <>
            <div className='app'>
                <Login_G />
                <Logout_G />
            </div>
        </>
    )
};

export default Google_test;
