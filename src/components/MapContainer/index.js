import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '38%',
    height: '50%',
    // display: 'flex',
};

class MapContainer extends Component {
    render() {
        return (
            <div>
                <Map
                  google={this.props.google}
                  style={mapStyles}
                  zoom={8}
                  initialCenter={{ 
                      lat: 47.444, 
                      lng: -122.176
                    }}
                />
            </div>
        );
      }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
  })(MapContainer);