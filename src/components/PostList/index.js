import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import CreatePost from '../CreatePostForm'

import * as ROUTES from '../../constants/routes'

class PostList extends Component {
    // state = {
    //     title: '',
    //     info: ''
    // }
render(){
    return(
        <Card style={{ width: '18rem' }}>
            {
            this.props.postsCreated.map((e, i) =>
            <div>
            <Card.Img variant="top" src={e.image} />
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        {e.info}
                    </Card.Text>
                    <Button variant="primary" href={ROUTES.POST}>Go somewhere</Button>
                </Card.Body>
            </div>
                )
            }
        </Card> 
        )
    
    }
}


export default withRouter(PostList)