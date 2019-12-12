import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import './style.css'
import MapContainer from '../MapContainer'

class PostShow extends Component{
    state = {
        post: {}
    }
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
                 <img src={this.state.post.homePics}/>
                {
                    this.state.post
                        ? 
                        <h1>{this.state.post.title}!</h1>
                        : <div>...loading</div>
                }
                    <p>{this.state.post.info}</p>
                    

                    <MapContainer lat={this.state.post.lat} long={this.state.post.long}/>
            </div>
            

                



        )
    }
    
}

export default PostShow