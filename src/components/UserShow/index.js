import React, { Component } from 'react'
import MapContainer from '../MapContainer'
import {Marker} from 'google-maps-react'
import './style.css'
import { Switch } from 'react-router-dom'


class UserShow extends Component {
    state = {
        user: {}
    }
    async componentDidMount(){
        console.log(this.props.state.id, 'userShow IDDDD')
        const reqUser = await fetch(`${process.env.REACT_APP_API_URL}/users/${this.props.state.id}`)
        console.log(reqUser, '<----reqUser')
        const parsedUser = await reqUser.json()
        this.setState({
            user: parsedUser
        })
    }
    //   viewUser = async () => {
    //     console.log('view event')
    //     try {
    //       const createdUsers = await fetch(`${process.env.REACT_APP_API_URL}/users/${this.props.id}`,{
    //         method: 'GET',
    //         credentials: 'include',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       })
    //       const parsedCreatedUsers = await createdUsers.json();
    //       console.log(parsedCreatedUsers, 'this is view usersparsed')
    //       this.setState({
    //         user: parsedCreatedUser
    //       })
    //     } catch(err){
    //       console.log(err);
    //     }
    //     this.props.history.push(`/users/${this.props.id}`)
    //   }
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
    <Switch>
        <div className="map">
            <MapContainer
            state={this.props.state}
            postsCreated={this.props.postsCreated}
            // google={this.props.google}
            // // center={{lat: this.props.lat, lng: this.props.long }}
            // height='300px'
            // zoom={15}
            />
        </div>
    </Switch>
    </div>
    )
    }
}


export default UserShow