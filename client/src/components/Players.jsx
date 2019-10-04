import React from 'react';

const Players = props => {
    const player = props.player
    return ( 
    <div>
        {player.map((player) =>
        <div>
            <h1>{player.name}</h1>
            <p>{player.country}</p>
            <p>{player.searches}</p>
        </div>
    )}
    </div>
    )
}
export default Players;