import React from 'react'
import Header from "../../components/header/header.component"
import "./homepage.component.css"
import { Container, Row, Col } from 'reactstrap';
import Category from '../../components/category/category.component.js'

function HomePage() {
    return (
        <div>
        <div className = "fixedtop">
            <Header />
        </div>
        <Container>
            <Row className = "categories">
                <Col md = "4" className = "firstRow">
                    <Category img = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </Col>
                <Col md = "4" className = "firstRow">
                    <Category img = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </Col>
                <Col md = "4" className = "firstRow">
                    <Category img = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </Col>
                <Col md = "6" className = "secondRow">
                    <Category img = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </Col>
                <Col md = "6" className = "secondRow">
                    <Category img = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </Col>
            </Row>
        </Container>
        
        </div>
    )
}

export default HomePage
