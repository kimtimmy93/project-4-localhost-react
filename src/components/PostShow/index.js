import React, { Component } from 'react'


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
        const fetchedPosts = await fetch(`${process.env.REACT_APP_API_URL}/posts/`)
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