import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import './style.css'


import * as ROUTES from '../../constants/routes'

class PostList extends Component {
render(){
    return(
        <div>
           <Card>
            {
            this.props.postsCreated.map((e, i) =>
            <div key={i}>
            <Card.Img variant="top" src={e.homePics} className='card-img-top'/>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                        {e.area}
                    </Card.Text>
                    <Button variant="primary" href={ROUTES.POST}>Go</Button>
                </Card.Body>
            </div>
                )
            }
        </Card>
        </div>
     
        

        )
    
    }
}


export default withRouter(PostList)