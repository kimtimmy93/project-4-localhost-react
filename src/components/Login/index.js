import React, { Component } from 'react'
import { doSignInWithEmailAndPassword} from '../../firebase/firebase'

import { Button, Form } from 'react-bootstrap'
import './style.css'

import * as ROUTES from '../../constants/routes'

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }
    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })
    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                // REDIRECT
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    render() {
        const { email, password, error } = this.state
        const isInvalid =
            password === '' ||
            email === ''
        return (
            <div className="loginform">
                <h1>LOGIN</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                    <Button variant="primary" type="submit" value='submit' disabled={isInvalid}>
                        Submit
                    </Button>
                    {error && <p>{error.message}</p>}
                </Form>
            </div>
        )
    }
}

export default Login
