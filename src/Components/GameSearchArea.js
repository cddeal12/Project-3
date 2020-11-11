import React from "react";
// import API from "../Utils/API";
import GameSearchCard from "./GameSearchCard";

function GameSearchArea(props) {

    // let images = [];
    // for (let i=0; i<props.results.length; i++) {
    //     API.searchById(props.results[i].id)
    //     .then((res) => {
    //         console.log(res);
    //     });
    // };

    return (
        <div className="list">
            {
                props.results.map((game, i) => {
                    return <GameSearchCard
                        key ={i}
                        title={game.title}
                        bggid={game.id}
                    />
                })
            }
        </div>
    )
}

export default GameSearchArea;
