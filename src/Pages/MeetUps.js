import React, {Component} from "react";
import MainNav from '../Components/MainNav';

class MeetUps extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>View Meet-Ups by search</h1>
                            <h3>Or, view all the meetups you're rsvp'd to</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default MeetUps;
