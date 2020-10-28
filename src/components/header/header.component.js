import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import './header.styles.css'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={{backgroundColor: 'white', fontFamily: "inherit"}} light expand="sm">
        <NavbarBrand style = {{fontWeight:600}}><NavLink to="/">AJJ Inc.</NavLink></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto topBotomBordersOut" navbar>
        
            <NavItem>
                <NavLink to = "/shop">
                Shop
                </NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink to = "/contact">
                Contact
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink to = "/login">
                Login
                </NavLink>
            </NavItem>
            
        </Nav>
        </Collapse>
        </Navbar>
    )
}

export default Header
