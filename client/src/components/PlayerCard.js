import React from "react";

function PlayerCard (props) {

    return (
        <div>
            {props.player.map(player => (
                <div key={player.id}>
                    <h2>{player.name}</h2>
                    <p>{player.country}</p>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;