import React,{ useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './header.styles.css'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={{backgroundColor: 'white'}}light expand="sm">
        <NavbarBrand href="/">AJJ Inc.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
            </Navbar>
    )
}

export default Header
