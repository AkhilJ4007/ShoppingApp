import React from 'react'
import Header from '../../components/header/header.component.js'
import './contactPage.css'
import { Container, Row, Col } from 'reactstrap';

function ContactPage() {
    return (
        <div>
        <Container style= {{fontSize: "20px"}}>
            <Row className = "contactHeading">
                <Col className = "fitContent">
                    <h2 className = "contactUS">Contact Us</h2>
                </Col>
            </Row>
            <Row style= {{marginTop: "30px"}}>
                <Col sm = "6">
                    Hi to anyone visiting this page. 
                    My name is Akhil and I am just another web developer stuck in the "Experience Paradox". I love solving problems and taking on new challenges. You can also find my work  on my Github page https://github.com/AkhilJ4007  
                </Col>
                
                <Col sm = "6">
                    <Row>
                        
                        <Col sm = "12" style= {{marginTop: "30px"}}>
                            Email: akhiljamesjoseph944@gmail.com
                        </Col>
                        
                        <Col sm = "12" style= {{marginTop: "30px"}}>
                            Phone: 647-302-4007
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>

    )
}

export default ContactPage
