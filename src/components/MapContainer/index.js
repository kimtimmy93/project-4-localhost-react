import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '35%',
    height: '80%'
}

class MapContainer extends Component {
   render(){
      const lati = this.props.lat
      const longi = this.props.long
        return (
           this.props
           ?
           <div>
            <Map
              google={this.props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{lat: lati, lng: longi}}
            >
               <Marker
                        // icon={{url: '../lh.png', scaledSize: {height: 40, width: 40}}}
                        position={{lat: lati, lng: longi}}
                     />
            </Map>
            </div>
            : ''
        )  
   }   
}

 
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP_API_KEY}`
})(MapContainer)