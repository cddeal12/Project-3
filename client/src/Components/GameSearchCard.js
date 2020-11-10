import React from "react";

const GameSearchCard = (props) => {

    return(
        <div className="card-container border rounded my-3 bg-dark text-white">
            <img className="p-3" src="https://via.placeholder.com/150" alt={props.title}/>
            <div className="desc p-3">
                <h2>{props.title}</h2>
                <h3>{props.id}</h3>
                <button className="btn btn-primary">Save</button>
            </div>
        </div>
    )
};

export default GameSearchCard;