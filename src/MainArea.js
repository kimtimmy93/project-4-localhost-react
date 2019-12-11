import React, { Component } from 'react'
import PostList from './components/PostList'
import {Row, Col, Container } from 'react-bootstrap'

class MainArea extends Component {
    render(){
        let postCards = this.props.postsCreated.map((e, i) => {
        return(
        <div key={i}>
            <Col sm="4">
                <PostList  />
            </Col>
            </div>
        )
        })
        return(
            <Container fluid>
                <Row>
                    {postCards}
                </Row>
            </Container>
        )
    }
}