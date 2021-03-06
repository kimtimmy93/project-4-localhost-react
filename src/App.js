import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom'

import NavBar from './components/NavBar'
import PostContainer from './components/PostContainer'
import PostList from './components/PostList'
import MainArea from './MainArea'
import PostShow from './components/PostShow'
import HostShow from './components/HostShow'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignUpWithEmailPassword from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import CreatePost from './components/CreatePostForm'
import ResetPassword from './components/ResetPassword'


import * as ROUTES from './constants/routes'
import { firebase, doAddFile, auth } from '../src/firebase/firebase'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const My404 = () => {
  return (
    <div>
      You are lost
    </div>
    )
};
class App extends Component {
  state = {
    currentUser: null,
    isLogged: false,
    post: {},
    postsCreated: [],
    id: '',
    title: '',
    area: '',
    lat: '',
    long: '',
    homePics: null,
    info: '',
  }
  async componentDidMount(){
    this.getPosts()
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({
          currentUser: {
            displayName: authUser.email
          },
          isLogged: true,
          id: authUser.uid
        })
        : this.setState({
          currentUser: null,
          isLogged: false
        })
    })
  }
handleChange = (e) => {
  this.setState({[e.currentTarget.name]: e.currentTarget.value})
}
handlePictureChange = (file) => {
  this.setState({homePics : file.target.files[0]})
}
  addProfilePicture = event => {
    doAddFile(event.target.files[0])
      .then(file => file.ref.getDownloadURL())
      .then(async url => {
        const updatedUser = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.state.id}`, {
          method: 'PUT',
          body: JSON.stringify({homePics: url}),
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
  getPosts = async () => {
    try {
      const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.state.id}`)
      const parsedPosts = await posts.json()
  
      this.setState({
        postsCreated: parsedPosts
      })
    } catch(err){
      console.log(err)
    }
  }
  viewPost = async() => {
    try{
      const createdPosts = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.state.id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedCreatedPosts = await createdPosts.json();
      this.setState({
        post: parsedCreatedPosts.data
      })
    } catch(err){
      console.log(err)
    }
    this.props.history.push(`/posts/${this.state.id}`)
  }
  addPost = async (e, postFromForm) => {
    e.preventDefault();
    const post = {
      lat: this.state.lat,
      long: this.state.long,
      info: this.state.info,
      area: this.state.area,
      title: this.state.title
    }
    try {
      if(this.state.homePics) {
        doAddFile(this.state.homePics)
          .then(file => file.ref.getDownloadURL())
          .then(async url => {
              const createdPostResponse = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.state.id}`, { 
                  method: 'POST',
                  body: JSON.stringify({...post, homePics: url}),
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
                const parsedResponse = await createdPostResponse.json();
                this.setState({
                  postsCreated: [...this.state.postsCreated, parsedResponse.data],
                })
                this.props.history.push('/')
                console.log(parsedResponse, '<---pr')
          })
      }
  } catch(err){
      console.log(err)
  }
}
  render(){
    return (
      <div>
        <NavBar isLogged={this.state.isLogged} currentUser={this.state.currentUser} id={this.state.id}/>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() =>  
          <PostList postsCreated={this.state.postsCreated} />} />
          <Route exact path={ROUTES.LOGIN} component={ Login } />
          <Route exact path={ROUTES.SIGN_UP} render={()=> <SignUpWithEmailPassword doSetCurrentUser={this.doSetCurrentUser}/>}/>
          <Route exact path={ROUTES.LOGOUT} />
          <Route exact path={ROUTES.RESET} component={ ResetPassword } />
          <Route exact path={ROUTES.NEW} render={() => 
            <CreatePost handlePictureChange={this.handlePictureChange} addPost={this.addPost} id={this.state.id} addProfilePicture={this.addProfilePicture} handleChange={this.handleChange} state={this.state}/> } />
          <Route exact path={ROUTES.PROFILE+this.state.id+'/profile'} render={() => <HostShow id={this.state.id} currentUser={this.state.currentUser} state={this.state} postsCreated={this.state.postsCreated} />} />
          <Route exact path={ROUTES.PROFILE + ':postId' } render={routeProps => <PostShow viewPost={this.viewPost} {...routeProps} />} />

          <Route component={My404} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
