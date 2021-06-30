import React from 'react'
import { Container, Row, Col,Button } from 'reactstrap';
import './cartItem.css'
import {useDispatch} from 'react-redux';
import {deleteCartItemSaga} from "../../redux/cart/cart.actions"
const cartHeadingStyle = {
    borderBottom: "2px solid rgba(0, 0, 0, 1)"
}

const imageUrl = "https://shopping-app-akj.herokuapp.com/product/getImage/"

function CartItem({heading,cartItem}) {
    
    const headingStyle = heading ? cartHeadingStyle : null

    const dispatch = useDispatch();

    const newImageName = cartItem ? imageUrl + cartItem.productId.imageName : "https://media.istockphoto.com/photos/no-image-available-picture-id531302789"
    const deleteItem = () => {
        console.log("Product Id", cartItem.productId._id)
        dispatch(deleteCartItemSaga(cartItem.productId._id))
    }
    return (
        <div>
    
            <Row className = "cartItemRow" style = {headingStyle}>
                <Col xs="3">
                    {heading? "Item" :  
                <div className = "shoppingImageWrapper">
                <img src = {newImageName}/>
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
            
        </div>
    )
}

export default CartItem
