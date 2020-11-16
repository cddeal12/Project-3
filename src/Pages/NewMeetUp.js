import React, {Component} from "react";
import MainNav from '../Components/MainNav';
import API from "../Utils/API";

class NewMeetUp extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            titleField: "",
            timeField: "",
            locationField: "",
            extraField: "",
            currentUser: 1,
            redAlert: "col-12 alert alert-danger invisible",
            greenAlert: "col-12 alert alert-success invisible",
        };
    };

    // Field Update Methods
    handleTitleUpdate = (event) => {
        this.setState({titleField: event.target.value});
    };

    handleTimeUpdate = (event) => {
        this.setState({timeField: event.target.value});
    };

    handleLocationUpdate = (event) => {
        this.setState({locationField: event.target.value});
    };

    handleExtraUpdate = (event) => {
        this.setState({extraField: event.target.value});
    };

    // Makes a post call to meetups using the states of the fields, IF none are empty
        // If there are empty fields, then displays an alert for a few seconds
    addNewMeetup = () => {
        if (this.state.titleField === "" || this.state.timeField === "" || this.state.locationField === "" || this.state.extraField === "") {
            this.setState({redAlert: "col-12 my-3 alert alert-danger visible"});
        } else {
            let newTitle = this.state.titleField;
            let newTime = this.state.timeField;
            let newLocation = this.state.locationField;
            let newExtra = this.state.extraField;
            let newOwner = this.state.currentUser;

            API.addMeetup({
                name: newTitle,
                timeInfo: newTime,
                locationInfo: newLocation,
                extraInfo: newExtra,
                ownerId: newOwner
            })
            .then( (res) => {
                // Sets the alerts to the proper visibility and clears the input fields to prevent quick re-sending of an identical meetup
                console.log(res);
                this.setState({redAlert: "col-12 alert alert-danger invisible"});
                this.setState({greenAlert: "col-12 alert alert-success visible"});
                this.setState({titleField: ""});
                this.setState({timeField: ""});
                this.setState({locationField: ""});
                this.setState({extraField: ""});
            });
        }
    };


    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Post a New Meetup</h1>
                            <h3>Enter all the information your guests need about your gathering</h3>
                            <h4>Make sure your guests know what name to search for to rsvp!</h4>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className={this.state.greenAlert} role="alert">Added your Meetup Successfully!</div>
                        <h4 className="col-12" >Meetup Title</h4>
                        <input id="meetup-title" maxLength="255" ref={this.textInput} value={this.state.titleField} onChange={this.handleTitleUpdate} type="text" className="form-control"></input>
                        <h4 className="col-12" >Time Info</h4>
                        <input id="time-input" maxLength="255" ref={this.textInput} value={this.state.timeField} onChange={this.handleTimeUpdate} type="text" className="form-control"></input>
                        <h4 className="col-12" >Location Info</h4>
                        <input id="location-input" maxLength="255" ref={this.textInput} value={this.state.locationField} onChange={this.handleLocationUpdate} type="text" className="form-control"></input>
                        <h4 className="col-12" >Extra Info</h4>
                        <input id="extra-input" maxLength="255" ref={this.textInput} value={this.state.extraField} onChange={this.handleExtraUpdate} type="text" className="form-control"></input>
                        <div className={this.state.redAlert} role="alert">Make sure you leave no fields empty.</div>                        
                        <div className="input-group-append my-3 align-center">
                            <button className="btn btn-primary text-white btn-outline-secondary" onClick={this.addNewMeetup} type="submit">Add Meetup</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default NewMeetUp;
