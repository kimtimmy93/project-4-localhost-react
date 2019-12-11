import React, { Component } from 'react'
import { doCreateUserWithEmailAndPassword } from '../../firebase/firebase'

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
                    password: this.state.password
                }
                console.log(authUser)
                const hitPost = await fetch(`${process.env.REACT_APP_API_URL}/auth/users`, {
                    method: "POST",
                    credentials: 'include',
                    body: JSON.stringify(newUser),
                    header: { 
                        "Content-Type": "application/json"
                    }
                })
                const hitPostJson = await hitPost.json()
                this.props.doSetCurrentUser(hitPostJson)
                // this.props.history.push(ROUTES.HOME)
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
            <div>
                <h1>SIGNUP</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                    <input type='text' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='text' name='passwordTwo' value={passwordTwo} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='submit' value='submit' disabled={isInvalid}/>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }
}

export default SignUpWithEmailPassWord
