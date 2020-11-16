import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    if(isAuthenticated){
        alert("Logging You In...");
        setTimeout(() => {window.open("/user-page", "_blank")}, 500);
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={() => {loginWithRedirect()}}>
            Login
            </button>
        </div>
    )
}

export default LoginButton;
