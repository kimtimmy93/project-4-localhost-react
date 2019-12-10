import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, FormControl } from 'react-bootstrap'

class CreatePost extends Component {
    state = {
        address: '',
        homePics: '',
        info: 'String',
    }
    handleChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render(){
        return(
            <Form onSubmit={(e) => this.props.addPost(e, this.state)}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                     <Form.Control type="address" placeholder="1234 abc street, Los Angeles, CA 0000" value={this.state.address} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Upload Your Picture</Form.Label>
                    <Form.Control type='file' onChange={this.props.addProfilePicture} accept='image/*' />
                    
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Add a description of your home</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                <Button type='Submit'>Submit</Button>
            </Form>
        )
    }
}


export default withRouter(CreatePost)