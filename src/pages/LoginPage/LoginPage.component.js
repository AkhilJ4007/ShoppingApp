import React from 'react'
import './LoginPage.component.css'
import { Container, Row, Col } from 'reactstrap';
import Header from "../../components/header/header.component"
import SignIn from '../../components/signIn/signIn.component.js'
function LoginPage() {
    return (
        <div>

        
        <div className = "fixedtop">
        <Header />
        </div>
        <div>
        
        <Container className = "loginContainer">
            <Row className = "rowContainer">
                <Col className = "colContainer" sm = "6">

                <SignIn signIn/>

                
                </Col>
                <Col className = "colContainer" sm = "6">
                
                <SignIn/>

                </Col>
            </Row>
        </Container>

        </div>

        </div>



    )
}

export default LoginPage;
