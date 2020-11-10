import React, {Component} from "react";
import MainNav from '../Components/MainNav';
import API from '../Utils/API';
import GameSearchArea from '../Components/GameSearchArea';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            gamesSearched: []
        };
    };

    handleFieldChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    handleGameSearch = () => {
        API.searchGames(this.state.searchField)
        .then((res) => {
            console.log("Searched successfully");
            let searchResults = [];
            // Render 10 GameSearchCards from the search results
            for (let i=1; i<20; i=i+2) {
                console.log(res.childNodes[0].childNodes[i]);
                let newTitle = res.childNodes[0].childNodes[i].childNodes[1].getAttribute("value");
                let newId = res.childNodes[0].childNodes[i].getAttribute("id");
                searchResults.push({
                    title: newTitle,
                    id: newId
                });
                this.setState({gamesSearched: searchResults});
            };
        });
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
                        <div className="input-group my-3">
                            <input type="text" onChange={this.handleFieldChange} className="form-control"/>
                            <div className="input-group-append">
                                <button className="btn text-white btn-success btn-outline-secondary" type="submit" onClick={this.handleGameSearch}>Search</button>
                            </div>
                        </div>
                        <GameSearchArea results={this.state.gamesSearched} />
                    </div>
                </div>
            </div>
        );
    };
};

export default UserPage;
