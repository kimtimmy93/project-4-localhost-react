import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import CreatePost from '../CreatePostForm'

import * as ROUTES from '../../constants/routes'

class PostList extends Component {
render(){
    return(
        this.props.postsCreated.map((e, i) =>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.image} />
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        {e.info}
                    </Card.Text>
                    <Button variant="primary" href={ROUTES.POST}>Go somewhere</Button>
                </Card.Body>
        </Card>
        </div>
       
            )
        )
    }
}


export default withRouter(PostList)