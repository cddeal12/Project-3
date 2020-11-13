import React from "react";
// import API from "../Utils/API";
import GameSearchCard from "./GameSearchCard";

function GameSearchArea(props) {

    return (
        <div className="list">
            {
                props.results.map((game, i) => {
                    return <GameSearchCard
                        key ={i}
                        title={game.title}
                        bggId={game.id}
                        saveGame={props.saveGameBtn}
                    />
                })
            }
        </div>
    )
}

export default GameSearchArea;
