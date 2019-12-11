import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';
import './style.css'


import * as ROUTES from '../../constants/routes'

class PostList extends Component {
render(){
    return(
   <div className='container-fluid d-flex justify-content-center'>
       <div className='row'>
           <div className="col-md-4">
           <Card style={{ width: '18rem' }}>
            {
            this.props.postsCreated.map((e, i) =>
            <div key={i}>
            <Card.Img variant="top" src={e.homePics} className='card-img-top'/>
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
           </div>
       </div>
   </div>
        
    
        )
    
    }
}


export default withRouter(PostList)