import React, {Component} from "react";
import Players from './Players'
import axios from 'axios'

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
        <div>
            <Players player={this.state.players} />
        </div>
    )
}
}
export default PlayersList;