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
              zoom={8}
              style={mapStyles}
              initialCenter={{lat: this.props.lat, lng: this.props.long}}
            >
                            
                                <Marker
                                    icon={{url: '../lh.png', scaledSize: {height: 20, width: 20}}}
                                    position={{lat: this.props.lat, lng: this.props.long}}
                                    />
            </Map>
            </div>
            
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP_API_KEY}`
})(MapContainer)