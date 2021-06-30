import React from 'react'
import Header from "../../components/header/header.component"
import "./homepage.component.css"
import { Container, Row, Col } from 'reactstrap';
import Category from '../../components/category/category.component.js'

function HomePage(props) {

    const onItemClick = (category) => () => {
        console.log("In category click")
        const path = '/shop/'+category;
        props.history.push(path);
    }
    return (
        <div>
        <Container>
            <Row className = "categories">
                <Col md = "4" className = "firstRow">
                    <Category onItemClick = {onItemClick} cat = "M" img = "https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name = "Man" on/>
                </Col>
                <Col md = "4" className = "firstRow">
                    <Category onItemClick = {onItemClick} cat = "W" img = "https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name = "Woman"/>
                </Col>
                <Col md = "4" className = "firstRow">
                    <Category onItemClick = {onItemClick} cat = "K" img = "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name = "Kids"/>
                </Col>
                <Col md = "6" className = "secondRow">
                    <Category onItemClick = {onItemClick} cat = "SB" img = "https://images.pexels.com/photos/6647708/pexels-photo-6647708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name = "Shoes and Bags"/>
                </Col>
                <Col md = "6" className = "secondRow">
                    <Category onItemClick = {onItemClick} cat = "AC" img = "https://images.pexels.com/photos/1850001/pexels-photo-1850001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" name = "Accessories"/>
                </Col>
            </Row>
        </Container>
        
        </div>
    )
}

export default HomePage
