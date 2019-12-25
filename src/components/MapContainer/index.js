import React, { Component } from 'react'
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl'

// const mapStyles = {
//     width: '35%',
//     height: '80%'
// }

class MapContainer extends Component {
   render(){
      const lati = this.props.lat
      const longi = this.props.long
        return (

           <div>
            <ReactMapboxGl
              style="mapbox://styles/mapbox/streets-v8"
              accessToken={`${process.env.REACT_APP_TOKEN}`}
            //   zoom={12}
            //   style={mapStyles}
            containerStyle={{
               width: '35%',
               height: '80%'
            }}>
               <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "marker-15" }}>
                  <Feature coordinates={[lati, longi]}/>
               </Layer>
            </ReactMapboxGl>
            </div>
        )  
   }   
}

 
export default MapContainer