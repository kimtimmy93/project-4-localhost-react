import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom'

import NavBar from './components/NavBar'
import PostContainer from './components/PostContainer'
import PostList from './components/PostList'
// import PostShow from './components/PostShow'
import UserShow from './components/UserShow'
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
      You are lost lil buddy : /
    </div>
    )
};
class App extends Component {
  state = {
    // message: '',
    currentUser: null,
    isLogged: false,
    post: {},
    postsCreated: [],
    id: ''
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
          isLogged: true,
          id: authUser.uid
        })
        : this.setState({
          currentUser: null,
          isLogged: false
        })
    })
    this.getPosts()
  }
  addProfilePicture = event => {
    doAddFile(event.target.files[0])
      .then(file => file.ref.getDownloadURL())
      .then(async url => {
        const updatedUser = await fetch(`auth/users/${this.state.currentUser._id}`, {
          method: 'PUT',
          body: JSON.stringify({profilePic: url}),
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
      console.log(parsedPosts, '<----parsedPost')
      this.setState({
        postsCreated: parsedPosts.data
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
      console.log(parsedCreatedPosts, 'this is view post parsed')
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
    try {
      const createdPostResponse = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.state.id}`, { 
          method: 'POST',
          body: JSON.stringify(postFromForm),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      const parsedResponse = await createdPostResponse.json();
      this.setState({postsCreated: [...this.state.postsCreated, parsedResponse.data]})
      this.props.history.push('/')
  } catch(err){
      console.log(err)
  }
}
  render(){
    // const { currentUser } = this.state
    return (
      <div>
        <NavBar isLogged = {this.state.isLogged} currentUser={this.state.currentUser}/>
        <h1>Hello {this.state.message}</h1>
        { !this.state.isLogged
        ? <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser} />
        : ''
        }
       
        {/* <PostContainer /> */}
        <Switch>
          <Route exact path={ROUTES.HOME} render={() =>  <PostList postsCreated={this.state.postsCreated} />}  />
          <Route exact path={ROUTES.LOGIN} component={ Login } />
          <Route exact path={ROUTES.SIGN_UP} render={()=> <SignUpWithEmailPassword doSetCurrentUser={this.doSetCurrentUser}/>}/>
          <Route exact path ={ROUTES.LOGOUT} />
          <Route exact path={ROUTES.RESET} component={ ResetPassword } />
          {/* <Route exact path={ROUTES.POST} component={ PostShow } /> */}
          <Route exact path={ROUTES.NEW} render={() => <CreatePost addPost={this.addPost} id={this.state.id} /> } />
          <Route exact path={ROUTES.PROFILE} render={() => <UserShow /> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
