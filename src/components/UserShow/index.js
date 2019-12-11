import React, { Component } from 'react'
import MapContainer from '../MapContainer'

class UserShow extends Component {
   
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