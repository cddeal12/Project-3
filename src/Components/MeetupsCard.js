import React, { Component } from "react";

class MeetupsCard extends Component {

    openMeetupInfo = () => {
        // Stores data in local storage to be passed into the new page
        localStorage.setItem("meetupName", this.props.name);
        localStorage.setItem("ownerId", this.props.ownerId);
        localStorage.setItem("timeInfo", this.props.timeInfo);
        localStorage.setItem("locationInfo", this.props.locationInfo);
        localStorage.setItem("extraInfo", this.props.extraInfo);
        localStorage.setItem("currentUser", this.props.currentUser);
        localStorage.setItem("thisMeetId", this.props.thisMeetId)
        window.open("/meetup-info", "_blank");
    };

    render() {
        return (
            <div className="row justify-content-center border bg-primary rounded my-4">
                <div onClick={this.renderModal} className="col-9 bg-secondary border rounded my-3">
                    <h2>{this.props.name}</h2>
                    <ul>
                        <li>{this.props.timeInfo}</li>
                        <li>{this.props.locationInfo}</li>
                        <li>{this.props.extraInfo}</li>
                    </ul>
                    <button onClick={this.openMeetupInfo} className="btn btn-info text-white mb-3">Details Page</button>
                </div>
            </div>
        )
    }
}

export default MeetupsCard;
