import React from 'react';
import styled from 'styled-components'

const PlayerStyle = styled.div ` 
display: flex;
flex-flow: wrap;
margin-left: 5%;
.playercard {
    width: 400px;
    height: 200px;
    background-color: #c5c5c5;
    display: flex;
    flex-flow: column;
    margin: 2% 0 2% 2%;
}
`
const Players = props => {
    const player = props.player
    return ( 
    <PlayerStyle className="players">
        {player.map((player) =>
        <div className="playercard">
            <h1>{player.name}</h1>
            <p>Country: {player.country}</p>
            <p> Number of searches: {player.searches}</p>
        </div>
    )}
    </PlayerStyle>
    )
}
export default Players;