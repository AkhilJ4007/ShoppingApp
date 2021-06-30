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
    const category = props.match.params.cat;
    let title = ""
    //console.log("Category",category)
    useEffect(() => {
        if(category === "M" || category === "W" || category === "K" || category === "SB" || category === "AC"){
            console.log("In here",category)
            dispatch(getShoppingItemsSaga(category))
        }
        else{
            dispatch(getShoppingItemsSaga(null))
        }
    }, [category])

    const onItemClick = (id) => () => {
        const path = '/item/'+id;
        props.history.push(path);
    }

    switch(category) {
        case "M":
                title = "Men's Collection"
                break;
        case "W":
            title = "Women's Collection"
            break;
        case "SB":
            title = "Shoes and Bags"
            break;
        case "AC":
            title = "Accesories"
            break;
        case "K":
            title = "Kid's Collection"
            break;
        
        default :
            title = "Collections";
            break;
    }


    return (
        <div>
            <div className = "banner">
                <img src = '//cdn.shopify.com/s/files/1/1132/3440/t/4/assets/homepage_hero_image.jpg?v=4275821292699920323'/>
                <div>
                <h1>{title}</h1>
                <div>Here are our summer collections</div>
                </div>
            </div>

        <Container>
            <Row className = "productHeading">
                <h2>Products</h2>
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
