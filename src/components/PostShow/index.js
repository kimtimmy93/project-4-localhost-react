import React, { Component } from 'react'
import { Switch } from 'react-router-dom'


class PostShow extends Component{
    state = {
        post: {}
    }
    //componentDidMount 
    // fetch this route 
    // props.match.params.postId
    // once u received the object 
    // set state with this object 
    async componentDidMount(){
        try {
            const fetchedPosts = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.props.match.params.postId}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedFetchedPosts = await fetchedPosts.json();
            this.setState({
                post: parsedFetchedPosts
              })
              console.log(parsedFetchedPosts, '<----pFP')
        } catch(err){
            console.log(err)
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.post
                        ? 
                        <h1>Hello {this.state.post.title}</h1>
                        : <div>...loading</div>
                }
            </div>

                



        )
    }
    
}

export default PostShow