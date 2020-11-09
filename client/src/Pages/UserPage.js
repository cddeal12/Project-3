import React, {Component} from "react";

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Google Books Search</h1>
                        <h3>Search for and save books</h3>
                    </div>
                </div>
            </div>
        );
    };
};

export default UserPage;
