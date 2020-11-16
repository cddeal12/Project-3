import React, { Component } from "react";
import MainNav from '../Components/MainNav';
import YourLibrary from "../Components/YourLibrary";
import MeetupLibraries from "../Components/MeetupLibraries";
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
            ownerName: "",
            attendees: [],
            ownerCollection: [],
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

        // Sets the owner's collection
        API.findUserGameByUser(this.state.ownerId)
        .then((response) => {
            console.log(response.data);
            let newOwnerCollection = [];
            for (let i=0; i<response.data.length; i++){
                API.getGameById(response.data[i].game_id)
                .then((response) => {
                    newOwnerCollection.push(response.data.title);
                    this.setState({ownerCollection: newOwnerCollection});
                });
            }

        });

        // Sets an array of user ids who are attending
        API.findUserMeetupByMeetup(this.state.thisMeetId)
        .then((response) => {
            let attendeesArr = [];
            response.data.forEach(element => {
                attendeesArr.push(element.attendee_id);
            });
            this.setState({attendees: attendeesArr});
        });

    };

    // Adds new association to attach the current user to the current meetup
    handleRSVP = () => {
        API.addUserMeetup({meetupId: this.state.thisMeetId, attendeeId: this.state.currentUser})
        .then((response) => {
            console.log("Added usermeetup association");
            console.log(response.data);
        });
    };

    render() {

        let attendeeLibraries = [];
        this.state.attendees.forEach((att) => {
            attendeeLibraries.push(<MeetupLibraries attId={att}/>);
        });

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
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>{this.state.ownerName} is bringing...</h3>
                        <YourLibrary library={this.state.ownerCollection} />
                        {attendeeLibraries}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button onClick={this.handleRSVP} className="btn btn-primary">RSVP</button>
                </div>
            </div>
        </div>
    }

}

export default MeetupInfo;