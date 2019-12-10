import React, { Component } from 'react'
import MapContainer from '../MapContainer'

class UserShow extends Component {
render(){
   return(
    <MapContainer
        google={this.props.google}
        center={{lat: 34.052235, lng: -118.2437 }}
        height='300px'
        zoom={15}
    />
   )
}
}

export default UserShow