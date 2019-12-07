import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import HostShow from './components/HostShow'
import UserShow from './components/UserShow'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'

import MapContainer from '../src/components/MapContainer'

import * as ROUTES from './constants/routes'
import { firebase, doAddFile, auth, doSignOut } from '../src/firebase/firebase'
import './App.css';


class App extends Component {
  state = {
    currentUser: null
  }
  async componentDidMount(){
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({
          currentUser: {
            displayName: authUser.email
          }
        })
        : this.setState({
          currentUser: null
        })
    })
  }
  doSetCurrentUser = (currentUser) => {
    this.setState({
      currentUser
    })
  }
  render(){
    const { currentUser } = this.state
    return (
      <div className="App">
        <NavBar />
        {
          currentUser
            ? <div>
              {currentUser.displayName}
              <button onClick={doSignOut}>Sign Out</button>
              {/* <img src={currentUser.imgURL}/> */}
            </div>
            : null
        }
        <h1>Hello</h1>
        {/* <MapContainer /> */}
        <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser}/>
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
