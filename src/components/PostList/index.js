import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button, Row, Col, CardDeck } from 'react-bootstrap';
import './style.css'


import * as ROUTES from '../../constants/routes'

class PostList extends Component {
render(){
    return(
        <div className="container">
            {
            this.props.postsCreated.map((e, i) => {
            // console.log(e, '<----e')
            return(
            <div key={i}>
            <Card id="the-card">
            <Card.Img variant="top" src={e.homePics} className='card-img-top'/>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    {/* <Card.Text>
                        {e.area}
                    </Card.Text> */}
            <Button variant="primary" href={ROUTES.PROFILE + e._id}>Go to {e.area}</Button>
                </Card.Body>
                </Card>
            </div>
            )
            }
            )
            }
        </div>
     
        

        )
    
    }
}


export default withRouter(PostList)