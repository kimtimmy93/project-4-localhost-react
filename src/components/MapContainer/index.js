import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import { Route, Switch, withRouter } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete'
import Geocode from "react-geocode";
import NavBar from '../NavBar'

Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
Geocode.enableDebug();

class MapContainer extends Component{
constructor( props ){
  super( props );
  this.state = {
   address: '',
   city: '',
   area: '',
   state: '',
   mapPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   },
   markerPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
}
  }
 }
 onChange = ( e ) => {
  this.setState({ [e.target.name]: e.target.value });
 };

 onMarkerDragEnd = ( event ) => {
    console.log( 'event', event );
    let newLat = event.latLng.lat(),
     newLng = event.latLng.lng(),
     addressArray = [];
  Geocode.fromLatLng( newLat , newLng ).then(
     response => {
      const address = response.results[0].formatted_address,
       addressArray =  response.results[0].address_components,
       city = this.getCity( addressArray ),
       area = this.getArea( addressArray ),
       state = this.getState( addressArray );
  this.setState( {
       address: ( address ) ? address : '',
       area: ( area ) ? area : '',
       city: ( city ) ? city : '',
       state: ( state ) ? state : ''
      } )
     },
     error => {
      console.error(error);
     }
    );
   };
   onPlaceSelected = ( place ) => {
    const address = place.formatted_address,
       addressArray =  place.address_components,
    //    city = this.getCity( addressArray ),
    //    area = this.getArea( addressArray ),
    //    state = this.getState( addressArray ),
       latValue = place.geometry.location.lat(),
       lngValue = place.geometry.location.lng();
    // Set these values in the state.
      this.setState({
    //    address: ( address ) ? address : '',
    //    area: ( area ) ? area : '',
    //    city: ( city ) ? city : '',
    //    state: ( state ) ? state : '',
    //    markerPosition: {
    //     lat: latValue,
    //     lng: lngValue
    //    },
       mapPosition: {
        lat: latValue,
        lng: lngValue
       },
      })
    };
render(){
const AsyncMap = withScriptjs(
   withGoogleMap(
    props => (
        
     <GoogleMap google={this.props.google}
      defaultZoom={this.props.zoom}
      defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
     >
    <Autocomplete
       style={{
        width: '100%',
        height: '40px',
        paddingLeft: '16px',
        marginTop: '2px',
        marginBottom: '100px'
       }}
       onPlaceSelected={ this.onPlaceSelected}
        types={['(regions)']} />
    <Marker google={this.props.google}
            name={'Dolores park'}
            draggable={true}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
      />
      <Marker />
</GoogleMap>
)
   )
  );
let map;
  if( this.props.center.lat !== undefined ) {
   map = <div>
     <div>
      {/* <div className="form-group">
       <label htmlFor="">City</label>
       <input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
      </div>
      <div className="form-group">
       <label htmlFor="">Area</label>
       <input type="text" name="area" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.area }/>
      </div>
      <div className="form-group">
       <label htmlFor="">State</label>
       <input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state }/>
      </div> */}
      {/* <div className="form-group">
       <label htmlFor="">Address</label>
       <input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
      </div> */}
     </div>
    
     <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&libraries=places"
      loadingElement={
       <div style={{ height: `100%` }} />
      }
      containerElement={
       <div style={{ height: this.props.height }} />
      }
      mapElement={
       <div style={{ height: `100%` }} />
      }
     />
    </div>
} else {
   map = <div style={{height: this.props.height}} />
  }
  return( map )
 }
}
export default MapContainer