import React, { Component } from "react";
import API from "../Utils/API";

class MeetupLibraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gamesArray: []
        };
    };

    componentDidMount = () => {
        console.log("Att library Mounted");

        API.setCurrentUser(this.props.attId)
        .then((response) => {
            this.setState({name: response.data.name});
        });

        let games = [];
        API.findUserGameByUser(this.props.attId)
        .then((response) => {
            for (let i=0; i<response.data.length; i++) {
                API.getGameById(response.data[i].game_id)
                .then((response2) => {
                    games.push(response2.data);
                })
            }
        })
        console.log(games);
        setTimeout(() => { this.setState({gamesArray: games})}, 1000);
        this.setState({gamesArray: games});
    };

    render() {

        // let name = "";
        // API.setCurrentUser(this.props.attId)
        // .then((response) => {
        //     name = response.data.name;
        // });

        // let games = [];
        // API.findUserGameByUser(this.props.attId)
        // .then((response) => {
        //     for (let i=0; i<response.data.length; i++) {
        //         API.getGameById(response.data[i].game_id)
        //         .then((response2) => {
        //             games.push(response2.data);
        //         })
        //     }
        // })
        // console.log(games);

        return (
            <div className="library">
                <h3>{this.state.name} is bringing...</h3>
                <div className="library">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Game</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.gamesArray.map((game, i) => {
                                    return <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{game.title}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }    
}

export default MeetupLibraries;
