import React from 'react'
import { Container, Row, Col,Button } from 'reactstrap';
import './cartItem.css'
import {useDispatch} from 'react-redux';
import {deleteCartItemSaga} from "../../redux/cart/cart.actions"
const cartHeadingStyle = {
    borderBottom: "2px solid rgba(0, 0, 0, 1)"
}



function CartItem({heading,cartItem}) {
    
    const headingStyle = heading ? cartHeadingStyle : null

    const dispatch = useDispatch();

    const deleteItem = () => {
        console.log("Product Id", cartItem.productId._id)
        dispatch(deleteCartItemSaga(cartItem.productId._id))
    }
    return (
            <Row className = "cartItemRow" style = {headingStyle}>
                <Col xs="3">
                    {heading? "Item" :  
                <div className = "shoppingImageWrapper">
                <img src = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </div>
            }
                </Col>
                <Col xs="5" className = "itemName">
                    <div>
                        {heading? "Item Name" : <div>{cartItem.productId.name}</div>}
                    </div>
                    <div>
                        {!heading && <div><Button onClick = {deleteItem}>Delete</Button></div>}
                    </div>

                </Col>
                <Col xs="2" style = {{textAlign:"center"}} className = "itemName">
                    <div>
                        {heading? "Quantity" : <div>{cartItem.quantity}</div>}
                    </div>  
                </Col>
                <Col xs="2" style = {{textAlign:"center"}} className = "itemName">
                    <div>
                        {heading? "Subtotal" : <div>{cartItem.subTotal}</div>}
                    </div>
                </Col>
            </Row>
    )
}

export default CartItem
