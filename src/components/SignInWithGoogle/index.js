import React, { Component } from 'react'
import { doSignInWithGoogle } from '../../firebase/firebase'


class SignInGoogleBase extends Component {
    state = { error: null };
    onSubmit = event => {
        doSignInWithGoogle()
        .then(async socialAuthUser => {
            const user = {
                displayName: socialAuthUser.user.displayName,
                email: socialAuthUser.user.email
            }
            const createdUser = await fetch(`${process.env.REACT_APP_API_URL}/auth/users`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(createdUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const createdUserJson = await createdUser.json()
            this.props.doSetCurrentUser(createdUserJson)
        })
        .catch(error => {
          this.setState({ error });
        });
      event.preventDefault();
    }
    render() {
      const { error } = this.state;
      return (
        <form onSubmit={this.onSubmit}>
          <button type="submit">Sign In with Google</button>
          {error && <p>{error.message}</p>}
        </form>
      );
    }
  }
  export default SignInGoogleBase


