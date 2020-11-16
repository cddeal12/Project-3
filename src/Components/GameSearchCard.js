import React from "react";

const GameSearchCard = (props) => {

    return(
        <div className="card-container border rounded my-3 bg-dark text-white">
            <div className="desc p-3">
                <h2>{props.title}</h2>
                <h3>{props.bggId}</h3>
                <button className="btn btn-primary" bggId={props.bggId} title={props.title} onClick={props.saveBtnPress}>Save</button>
            </div>
        </div>
    )
};

export default GameSearchCard;
