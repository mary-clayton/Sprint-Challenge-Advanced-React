import React, {Component} from "react";
import Players from './Players'
import axios from 'axios'
import styled from 'styled-components'

const ListStyle = styled.div ` 
`

class PlayersList extends Component {
constructor() {
    //state
    super();
    this.state ={
    players: []
    }
}
//componentDidMount (useEffect)
componentDidMount() {
axios
.get ('http://localhost:5000/api/players')
.then (res => {
    this.setState({
        players: res.data
    })
})
.catch(err => console.log('404 error', err));
}
//return
render() {
    return (
        <ListStyle className="playerlist">
            <Players player={this.state.players} />
        </ListStyle>
    )
}
}
export default PlayersList;