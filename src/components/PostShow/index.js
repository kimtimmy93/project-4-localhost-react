import React, { Component } from 'react'


class PostShow extends Component {
    state = {
        post: {}
    }
    async componentDidMount(){
        const postId = this.props.match.params.id
        const reqPost = await fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}`)
        console.log(reqPost)
        const parsedPost = await reqPost.json()
        this.setState({
            host: parsedPost.data
        })
    }
    render(){
        return(
            <h1>Hello my name is {this.state.post.name}</h1>
        )
    }
}

export default PostShow