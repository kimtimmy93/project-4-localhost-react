import React, { Component } from 'react'
import MapContainer from '../MapContainer'

class UserShow extends Component {
    state = {
        user: {}
    }
    async componentDidMount(){
        const userId = this.props.match.params.id
        console.log(userId)
        const reqUser = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`)
        console.log(reqUser, '<----reqUser')
        const parsedUser = await reqUser.json()
        this.setState({
            user: parsedUser.data 
        })
    }
    render(){
        return(
        <MapContainer
            google={this.props.google}
            center={{lat: this.props.lat, lng: this.props.long }}
            height='300px'
            zoom={15}
        />
        )
    }
}

export default UserShow