import React, { Component } from 'react'
import { doPasswordReset } from '../../firebase/firebase'
import * as ROUTES from '../../constants/routes'

class ResetPassword extends Component {
    state = {
        email: '',
        error: null
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        const { email } = this.state
        e.preventDefault()
        doPasswordReset(email)
            .then(() => {
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error })
            })
    }
    render() {
        const { email } = this.state
        const { error } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name='email' 
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email"
                    />
                    <button type='submit'>Reset My Password</button>
                    {error && <p>{error.message}</p>}
            </form>
        )
    }
}
export default ResetPassword