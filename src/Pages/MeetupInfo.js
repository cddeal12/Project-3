import React, { Component } from "react";
import MainNav from '../Components/MainNav';
import API from "../Utils/API";

class MeetupInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.meetupName,
            ownerId: localStorage.ownerId,
            timeInfo: localStorage.timeInfo,
            locationInfo: localStorage.locationInfo,
            extraInfo: localStorage.extraInfo,
            currentUser: localStorage.currentUser,
            thisMeetId: localStorage.thisMeetId,
            ownerName: ""
        }
    }

    componentDidMount = () => {
        console.log("MeetupInfo Mounted with the following state...")
        console.log(this.state);

        // Sets the owner's name to the state for display purposes
        API.setCurrentUser(this.state.ownerId)
        .then((response) => {
            console.log(response);
            this.setState({ownerName: response.data.name});
        });

        

    };

    render() {
        return <div>
            <MainNav />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5 border rounded text-white bg-secondary">
                        <h1>Meetup: {this.state.name}</h1>
                        <h2>This meetup created by {this.state.ownerName}</h2>
                        <ul>
                            <p className="bg-dark rounded">Time: {this.state.timeInfo}</p>
                            <p className="bg-dark rounded">Location: {this.state.locationInfo}</p>
                            <p className="bg-dark rounded">Information: {this.state.extraInfo}</p>
                        </ul>
                    </div>
                    <hr></hr>
                    <div>
                        {

                        }
                    </div>
                </div>
            </div>
        </div>
    }

}

export default MeetupInfo;