import React,{useEffect,useState}  from 'react'
import Header from "../../components/header/header.component"
import { Container, Row, Col } from 'reactstrap';
import './ItemPage.css'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux';
import {getShoppingItemSaga} from '../../redux/shopping_items/shopping_items.actions'
import {addCartItemSaga} from '../../redux/cart/cart.actions'
const imageUrl = "http://localhost:3000/product/getImage/"
function ItemPage(props) {
    const productId = props.match.params.id;
    const dispatch = useDispatch();
    const product = useSelector(state => state.shoppingItems.selectedItem)

    let textInput = React.createRef();

    const newImageName = product ? imageUrl + product.imageName : "https://media.istockphoto.com/photos/no-image-available-picture-id531302789"

    const [numberOfitems , setItemNumber] = useState(null);
    const [itemId , setId] = useState(null);

    function handleClick() {

        console.log("Number of items",numberOfitems)
        console.log("Item Id", itemId)
        dispatch(addCartItemSaga({numberOfitems : numberOfitems, itemId: itemId}))
    }

    const setItemCount = (event) => {
        
        setItemNumber(event.target.value)


    }
    
    useEffect(() => {
        if(productId != null && dispatch != null){
            // use axios
            console.log("Dispatched")
            dispatch(getShoppingItemSaga(productId))
        }
    },[dispatch])

    useEffect(() => {

        if(product){
            setId(product._id)
        }
        
        
    }, [product])

    return (
        <div>
            <Container className = "containerStyle">
                <Row>
                    <Col xs = "6">
                    <div className = "shoppingImageWrapper">
                    <img src = {newImageName}/>
                    </div>
                    </Col>

                    <Col xs = "6">
                        <Container className = "productDescription">
                            <Row style = {{marginTop : "0rem"}}>
                                <h2>{product ? product.name : ""}</h2>
                            </Row>
                            <Row>
                                <h4>${product ? product.price : ""}</h4>
                            </Row>
                        
                            <Row>
                                <div>{product ? product.description : ""}</div>
                            </Row>
                            <Row>
                            <InputGroup>
                            <InputGroupAddon addonType="prepend">Qty</InputGroupAddon>
                            <Input ref={textInput} onChange = {setItemCount} min={0} max={100} type="number" step="1" />
                            </InputGroup>
                            </Row>
                            <Row>
                                <Button onClick={handleClick}> Add to Cart </Button>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemPage
