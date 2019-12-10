import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, FormControl } from 'react-bootstrap'

class CreatePost extends Component {
    state = {
        address: '',
        coordinates: '',
        homePics: '',
        info: 'String',
    }
    handleChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget/value})
    }
    render(){
        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                     <Form.Control type="address" placeholder="1234 abc street, Los Angeles, CA 0000" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    </Form.Group>
            </Form>
        )
    }
}


export default withRouter(CreatePost)