import React, {Component} from "react";
import MainNav from '../Components/MainNav';
import API from "../Utils/API";
import MeetupsCard from "../Components/MeetupsCard";

class MeetUps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedMeets: [],
            typeToDisplay: "Meetups",
            currentUser: 1
        };
    };

    componentDidMount = () => {
        console.log("MeetupPage did mount.");

        // Sets the "displayedMeets" key of state to the user's owned meetups by default
        API.getMeetupByOwner(this.state.currentUser)
        .then((results) =>{
            console.log("Did Mount Results")
            console.log(results);
            this.setState({displayedMeets: results.data});
        });
    };

    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h1>View posted meetups!</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div>
                            <h2>Now showing: {this.state.typeToDisplay}</h2>
                            {
                                this.state.displayedMeets.map((meet, i) => {
                                    return <MeetupsCard 
                                        key={i}
                                        name={meet.meetup_name}
                                        ownerId={meet.owner_id}
                                        timeInfo={meet.time_info}
                                        locationInfo={meet.location_info}
                                        extraInfo={meet.extra_info}
                                        currentUser={this.state.currentUser}
                                        thisMeetId={meet.id}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default MeetUps;
