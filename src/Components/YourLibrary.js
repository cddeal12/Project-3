import React from "react";

function YourLibrary(props) {

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
                        props.library.map((game, i) => {
                        return <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{game.title}</td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default YourLibrary;
