import React, {Component} from "react";
import MainNav from '../Components/MainNav';

class UserPage extends Component {
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
                            <h1>Main User Page</h1>
                            <h3>Edit Your Name and Your Collection</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default UserPage;
