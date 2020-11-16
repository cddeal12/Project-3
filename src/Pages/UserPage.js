import React, {Component} from "react";
import MainNav from '../Components/MainNav';
import API from '../Utils/API';
import GameSearchArea from '../Components/GameSearchArea';
import YourLibrary from "../Components/YourLibrary";

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            gamesSearched: [],
            currentUser: 1,
            library: []
        };
    };

    componentDidMount = () => {
        console.log("COMPONENTDIDMOUNT");

        // Gets all the games owned by the current user
        API.findUserGameByUser(this.state.currentUser)
        .then((userGames) => {
            console.log(userGames);
            let newLib = [];
            for (let i=0; i<userGames.data.length; i++){
                API.getGameById(userGames.data[i].game_id)
                .then((response) => {
                    newLib.push(response.data.title)
                    console.log(newLib);
                    this.setState({library: newLib});
            });
        }


        });
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

    // Saves the game to the database when clicked
    saveBtnPress = (event) => {
        let targetBGG = event.target.getAttribute("bggid");
        let targetTitle = event.target.getAttribute("title");
        let userAddingGame = this.state.currentUser;
        console.log("You clicked a save button with bggId: " + targetBGG);
        let currentLib = this.state.library;
        currentLib.push(targetTitle);

        API.addGame({
            title: targetTitle,
            bggId: targetBGG,
            imageString:"https://via.placeholder.com/150"
        })
        .then((res) => {
            this.setState({library: currentLib});
            API.addUserGame({
                userId: userAddingGame,
                gameId: res.data.id
            })
        });
    };

    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                        <h1>Welcome to bgg-tracker</h1>
                        <h3>Edit your Name and Collection here</h3>
                        </div>
                        <br></br>
                        <h4 className="text-center">Display Name Change</h4>
                        <div className="input-group mb-4 text-center">
                            <input type="text" className="form-control"></input>
                            <div className="input-group-append">
                                <button className="btn btn-primary text-white btn-outline-secondary" type="submit">Update</button>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-12">
                            <h2>Your Current Library</h2>
                            <YourLibrary library={this.state.library}/>
                        </div>
                        <br></br>
                        <h4 className="mt-5">Search</h4>
                        <div className="input-group">
                            <input type="text" onChange={this.handleFieldChange} className="form-control"/>
                            <div className="input-group-append">
                                <button className="btn text-white btn-success btn-outline-secondary" type="submit" onClick={this.handleGameSearch}>Search</button>
                            </div>
                        </div>
                        <GameSearchArea results={this.state.gamesSearched} saveBtnPress= {this.saveBtnPress} />
                    </div>
                </div>
            </div>
        );
    };
};

export default UserPage;
