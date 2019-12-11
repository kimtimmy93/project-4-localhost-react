import React, { Component } from 'react'
import MapContainer from '../MapContainer'

class UserShow extends Component {
    state = {
        user: {}
    }
    async componentDidMount(){
        const reqUser = await fetch(`${process.env.REACT_APP_API_URL}/users/${this.props.id}`)
        console.log(reqUser, '<----reqUser')
        const parsedUser = await reqUser.json()
        this.setState({
            user: parsedUser
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