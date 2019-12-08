import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import HostShow from './components/HostShow'
import UserShow from './components/UserShow'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import HostList from './components/HostList'

import MapContainer from '../src/components/MapContainer'

import * as ROUTES from './constants/routes'
import { firebase, doAddFile, auth, doSignOut } from '../src/firebase/firebase'
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
  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
   
  }
  render(){
    const { currentUser } = this.state
    return (
      <div className="App">
        <NavBar isLogged = {this.state.isLogged}/>
        {
          currentUser
            ? <div>
              {currentUser.displayName}
              <button onClick={doSignOut}>Sign Out</button>
              {/* <img src={currentUser.imgURL}/> */}
            </div>
            : null
        }
        <h1>Hello {this.state.message}</h1>
        <MapContainer />
        <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser}/>
        <HostList />
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
          <Route exact path={ROUTES.LOGIN} component={ Login } />
          <Route exact path={ROUTES.SIGN_UP} component={ SignUpWithEmailPassword }/>
          <Route exact path={ROUTES.RESET} component={ ResetPassword } />
      </Switch>
      </div>
    )
  }
  }

export default App;
