import React,{useEffect}  from 'react'
import "./shoppingPage.css"
import Header from "../../components/header/header.component"
import { Container, Row, Col } from 'reactstrap';
import ShoppingItem from '../../components/shoppingItem/shoppingItem.component.js'
import {useSelector,useDispatch} from 'react-redux'
import {getShoppingItemsSaga, getShoppingItems} from "../../redux/shopping_items/shopping_items.actions"


function ShoppingPage(props) {

    const shoppingItems = useSelector(state => state.shoppingItems.shoppingItems)
    const dispatch = useDispatch()  
    
    
    useEffect(() => {
        dispatch(getShoppingItemsSaga())
    }, [dispatch])

    const onItemClick = (id) => () => {
        const path = '/item/'+id;
        props.history.push(path);
    }

    return (
        <div>
            <div className = "banner">
                <img src = '//cdn.shopify.com/s/files/1/1132/3440/t/4/assets/homepage_hero_image.jpg?v=4275821292699920323'/>
                <div>
                <h1>Collections</h1>
                <div>Here are our summer collections</div>
                </div>
            </div>

        <Container>
            <Row className = "productHeading">
                <h2>Featured Products</h2>
            </Row>
            <Row>
                {

                shoppingItems ? shoppingItems.map( (shoppingItem, key) => {
                        
                        return <ShoppingItem item = {shoppingItem} key = {shoppingItem._id} onItemClick = {onItemClick}/>
                    } ) : null
                }
            </Row>
        </Container>


                
        </div>

    )
}

export default ShoppingPage
