import React, { Component } from 'react';
import PostList from '../PostList';
import CreatePost from '../CreatePostForm'


class PostContainer extends Component {
    state = { 
        posts: [],
    }
    componentDidMount(){
     this.getPosts();
    }
    getPosts = async() => {
        try {
            const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts`)
            const parsedPosts = await posts.json();
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



