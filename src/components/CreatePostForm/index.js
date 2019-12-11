import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, FormControl } from 'react-bootstrap'

class CreatePost extends Component {
    // state = {
    //     title: '',
    //     area: '',
    //     lat: '',
    //     long: '',
    //     homePics: '',
    //     info: '',
    // }
    // handleChange = (e) => {
    //     this.setState({[e.currentTarget.name]: e.currentTarget.value})
    // }
    render(){
        console.log(this.props.state.id, "THIS IS ON THE CREATE COMPONENT")
        return(
            <Form onSubmit={(e) => this.props.addPost(e)}>
                 <Form.Group controlId="exampleForm.ControlInput">
                    <Form.Label>Title</Form.Label>
                     <Form.Control type="text" name="title" placeholder="Enter a title" value={this.props.state.title} onChange={this.props.handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput0">
                    <Form.Label>Area</Form.Label>
                     <Form.Control type="text" name="area" placeholder="Enter a city and country" value={this.props.state.area} onChange={this.props.handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Latitude:</Form.Label>
                     <Form.Control type="text" name="lat" placeholder="Enter Latitude" value={this.props.state.lat} onChange={this.props.handleChange} />
                     <Form.Label>Longitude:</Form.Label>
                     <Form.Control type="text" name="long" placeholder="Enter Longitude" value={this.props.state.long} onChange={this.props.handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Upload Your Picture</Form.Label>
                    <Form.Control type="file" name="homePics" onChange={this.props.handlePictureChange} accept="image" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Add a description of your home</Form.Label>
                    <Form.Control as="textarea" rows="3" name="info" value={this.props.state.info} onChange={this.props.handleChange} />
                    </Form.Group>
                <Button type='Submit'>Submit</Button>
            </Form>
        )
    }
}


export default withRouter(CreatePost)