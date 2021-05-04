import React from 'react'
import Header from '../../components/header/header.component.js'
import './contactPage.css'
import { Container, Row, Col } from 'reactstrap';

function ContactPage() {
    return (
        <div>
        <Container>
            <Row className = "contactHeading">
                <Col className = "fitContent">
                    <h2 className = "contactUS">Contact Us</h2>
                </Col>
            </Row>
            <Row>
                <Col sm = "6">
                    
                </Col>
                <Col sm = "6">
                </Col>
            </Row>
        </Container>
        </div>

    )
}

export default ContactPage
