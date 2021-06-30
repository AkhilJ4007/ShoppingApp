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
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './header.styles.css'
import {useSelector,useDispatch} from 'react-redux'
import {logoutSaga} from '../../redux/user/userActions'
import { Alert } from 'reactstrap';
import {dismissAlert} from "../../redux/alerts/alert.actions"
function Header() {
    const user = useSelector(state => state.user.user)
    const alerts = useSelector(state => state.alert)
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen(prevState => !prevState);


    // for alerts
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        dispatch(dismissAlert())
    }

    const logout = () => {
        console.log("In logout component")
        dispatch(logoutSaga())
    }
    return (
        <>
        <Navbar style={{backgroundColor: 'white', fontFamily: "inherit"}} light expand="sm">
        <NavbarBrand style = {{fontWeight:600}}><NavLink to="/">AJJ Inc.</NavLink></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        
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
            { !user? <NavLink to = "/login">
                Login
                </NavLink> : 
                
                <Dropdown  isOpen={dropdownOpen} toggle={toggleDropDown}>
                    <DropdownToggle className="dropdownbutton" color = "black" caret>
                        {user ? user.user.name : ""}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem><NavLink className = "menuItemsNav" to = "/cart">My Cart</NavLink></DropdownItem>
                        <DropdownItem><NavLink className = "menuItemsNav" to = "/addItem">Sell Item</NavLink></DropdownItem>
                        <DropdownItem onClick = {logout}>Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
            }
            </NavItem>

            
        </Nav>
        </Collapse>
        </Navbar>

        <Alert color="info" isOpen={alerts.toggle} toggle={onDismiss}>
        {alerts.message}
        </Alert>

    </>
        
    )
}

export default Header
