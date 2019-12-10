import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import PostContainer from './components/PostContainer'
import PostList from './components/PostList'
import PostShow from './components/PostShow'
import UserShow from './components/UserShow'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'



import MapContainer from '../src/components/MapContainer'

import * as ROUTES from './constants/routes'
import { firebase, doAddFile, auth } from '../src/firebase/firebase'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    message: '',
    currentUser: null,
    isLogged: false,
  }
  async componentDidMount(){
    const message = await fetch('/api/v1/hello')
    const messageJson = await message.json()
    this.setState({
      message: messageJson.message
    })
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({
          currentUser: {
            displayName: authUser.email
          },
          isLogged: true
        })
        : this.setState({
          currentUser: null,
          isLogged: false

        })
        console.log(this.state.isLogged, '<---auth')
    })
  
  }
  addProfilePicture = event => {
    doAddFile(event.target.files[0])
      .then(file => file.ref.getDownloadURL())
      .then(async url => {
        const updatedUser = await fetch(`auth/users/${this.state.currentUser._id}`, {
          method: 'PUT',
          body: JSON.stringify({imgURL: url}),
          headers: {
            'Content-type': 'application/json'
          }
        })
        const updatedUserJson = await updatedUser.json()
        this.doSetCurrentUser(updatedUserJson)
      })
  }
  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
   
  }
  render(){
    const { currentUser } = this.state
    return (
      <div>
        <NavBar isLogged = {this.state.isLogged} currentUser={this.state.currentUser}/>
        <h1>Hello {this.state.message}</h1>
        { !this.state.isLogged
        ? <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser} />
        : ''
        }
        <PostContainer />
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>}  render={() => <MapContainer
          google={this.props.google}
          center={{lat: 34.052235, lng: -118.2437 }}
          height='300px'
          zoom={15}
          />}/>
          <Route exact path={ROUTES.LOGIN} component={ Login } />
          <Route exact path={ROUTES.SIGN_UP} component={ SignUpWithEmailPassword }/>
          <Route exact path ={ROUTES.LOGOUT} />
          <Route exact path={ROUTES.RESET} component={ ResetPassword } />
          <Route exact path={ROUTES.POST} component={ PostShow } />
        </Switch>
      </div>
    )
  }
}

export default App;
