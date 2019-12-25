import React, { Component } from 'react'
import { doCreateUserWithEmailAndPassword } from '../../firebase/firebase'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './style.css'
import * as ROUTES from '../../constants/routes'

class SignUpWithEmailPassWord extends Component {
    state = {
        email: '',
        password: '',
        passwordTwo: '',
        error: null
    }
    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })
    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        doCreateUserWithEmailAndPassword(email, password)
            .then(async authUser => {
                // REDIRECT
                const newUser = {
                    email: authUser.user.email,
                    password: this.state.password,
                    _id: authUser.user.uid
                }
                const hitPost = await fetch(`${process.env.REACT_APP_API_URL}/auth/users`, {
                    method: "POST",
                    credentials: 'include',
                    body: JSON.stringify(newUser),
                    headers: { 
                        "Content-Type": "application/json"
                    }
                })
                const hitPostJson = await hitPost.json()
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    render() {
        const { email, password, passwordTwo, error } = this.state
        const isInvalid =
            password !== passwordTwo ||
            password === '' ||
            email === ''
        return (
            <div className="signupform">
                <h1>SIGNUP</h1>
<Form onSubmit={this.onSubmit}>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" name='email' value={email} placeholder="Enter email" onChange={this.onChange} />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password"  name='password' value={password} placeholder="Password"  onChange={this.onChange}/>
</Form.Group>
<Form.Group controlId="formBasicPasswordTwo">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password"  name='passwordTwo' value={passwordTwo} placeholder=" Re-Enter Password"  onChange={this.onChange}/>
</Form.Group>
<Button variant="primary" type="submit" value='submit' disabled={isInvalid}>
  Submit
</Button>
{error && <p>{error.message}</p>}
</Form>
</div>
        )
    }
}

export default SignUpWithEmailPassWord
