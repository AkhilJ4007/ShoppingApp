import React,{useEffect}  from 'react'
import Header from '../../components/header/header.component.js'
import './CartPage.css'
import { Container, Row, Col } from 'reactstrap';
import CartItem from '../../components/cartItem/CartItem'
import {getCartItemsSaga} from '../../redux/cart/cart.actions'
import {useSelector,useDispatch} from 'react-redux';
function CartPage() {

    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch();
    const totalPrice = cart ? cart.items.reduce(function(prev, cur) {
        return prev + cur.subTotal;
    }, 0) : 0;
    useEffect(() => {
        if(cart === null){
            console.log("In effect cart")
            dispatch(getCartItemsSaga())
        }
    }, [dispatch])



    return (
        <div>
            <Container>
            <Row className = "productHeading">
                <h2>Cart Items</h2>
            </Row>
            <CartItem heading/>
            {
            cart ? cart.items.map((cartitem) => {
                    return <CartItem key = {cartitem._id} cartItem = {cartitem} />
                }): null
            }
            <Row style ={{padding: "2rem 0"}}>
                <Col xs = "10">
                    <div style = {{marginLeft:"2rem"}}>
                    Total
                    </div>
                </Col>
                <Col xs = "2" style = {{textAlign: "center"}}>
                    {cart ? totalPrice : "0"}
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CartPage
