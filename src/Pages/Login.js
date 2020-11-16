import React from "react";
import LoginButton from '../Components/LoginButton';

function Pages() {
    return (
        <div className="container text-align-center">
            <h1>Welcome to the Board Game Meetup Tracker</h1>
            <h4>Powered by the Boardgamegeek API</h4>
            <LoginButton />
        </div>
    )
}

export default Pages;
