import React, { Component } from "react";
// import API from "../Utils/API";

class YourLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount = () => {
        console.log("Library Mounted");
    };

    // componentDidUpdate = () => {
    //     console.log(this.props);
    //     let newLib = [];
    //     for (let i=0; i<this.props.library.length; i++){
    //         API.getGameById(this.props.library[i].game_id)
    //         .then((response) => {
    //             newLib.push(response.data.title)
    //             console.log(newLib);
    //             this.setState({library: newLib});
    //         });
    //     }
    // };

    render() {
        return (
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
                            this.props.library.map((game, i) => {
                                return <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{game}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }    
}

export default YourLibrary;
