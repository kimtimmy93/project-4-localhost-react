import React, { Component } from 'react'
import MapContainer from '../MapContainer'
import './style.css'
import { Switch } from 'react-router-dom'


class UserShow extends Component {
    state = {
        user: {}
    }
    async componentDidMount(){
        try {
        const reqUser = await fetch(`${process.env.REACT_APP_API_URL}/auth/users/${this.props.match.params.userId}/profile`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        
        const parsedUser = await reqUser.json()
        this.setState({
            user: parsedUser
        })
        } catch(err){
            console.log(err)
        }
    }
    async savePost(){
        const savedPost = await fetch(`${process.env.REACT_APP_API_URL}/posts/${this.props.match.params.postId}`)
        
    }
    render(){
        return(
        <div>
        <Switch>
                <div className="content">
                    {
                    this.props.postsCreated.map((e, i) =>
                        <div key={i}>
                            <img variant="top" src={e.homePics} className='img'/>
                                <div>
                                    <div className="title">{e.title}</div>
                                <div>
                                    {e.info}
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
    </Switch>
    
    </div>
    )
    }
}


export default UserShow

