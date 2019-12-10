import React, { Component } from 'react';
import PostList from '../PostList';


class PostContainer extends Component {
    state = { 
        posts: [],
    }
    componentDidMount(){
     this.getPosts();
        // fetch the hosts from backend
        // setstate
    }
    getHosts = async () => {
       try {
        const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts`)
        const parsedPosts = await posts.json()
        console.log(parsedPosts)
        this.setState({
            posts: parsedPosts.data
        })
       } catch(err){
           console.log(err)
       }
    }
    render(){
        return(
        <PostList 
            posts={this.state.posts}
        />
        )
    }
}


export default PostContainer



