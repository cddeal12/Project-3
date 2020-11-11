import React, {Component} from "react";
import MainNav from '../Components/MainNav';

class NewMeetUp extends Component {
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
                            <h1>Post a New Meetup</h1>
                            <h3>Then send your guests the name to search for so they can rsvp</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default NewMeetUp;
