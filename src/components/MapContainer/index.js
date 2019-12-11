import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '35%',
    height: '80%'
}

class MapContainer extends Component {
    render() {
        return (
        <div>
            <Map
              google={this.props.google}
              zoom={10}
              style={mapStyles}
              initialCenter={{lat: 34.0500, lng: -118.2500}}
            >
               {
                  this.props.postsCreated.map(p => 
                     <Marker
                        icon={{url: '../lh.png', scaledSize: {height: 40, width: 40}}}
                        position={{lat: p.lat, lng: p.long}}
                     />
                  )
               }
                            
                                
            </Map>
            </div>
            
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP_API_KEY}`
})(MapContainer)