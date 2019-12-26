import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

class MapContainer extends Component {
   render(){
        return (
           <div>
            <ReactMapGL
               mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
               mapStyle="mapbox://styles/mapbox/streets-v9"
               zoom={12}
               containerStyle={{
               width: '35%',
               height: '80%'
            }}
            >
               <Marker
                                        latitude={this.props.lat}
                                        longitude={this.props.long}
                                        offsetLeft={-25}
                                        offsetTop={-50}
                                        >
                                        {/* <Pin src="/images/pin.png" alt="map marker"/> */}
                                    </Marker>
               </ReactMapGL>
            </div>
        )  
   }   
}

 
export default MapContainer