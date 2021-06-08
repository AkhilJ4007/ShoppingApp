import React,{useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FormControl,InputLabel,Input,FormHelperText, Select, MenuItem } from '@material-ui/core';
import { useForm } from "react-hook-form";
import ReactHookFormSelect from '../../components/reacthookformselect/ReactHookFormSelect'
import "./AddItemPage.css"
import "../../css/buttonAnimation.css"
import {addShoppingItem} from "../../redux/shopping_items/shopping_items.actions" 
function AddItemPage() {


    const { register, handleSubmit, control } = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(addShoppingItem(data))
    };

    return (
        <div>
        <Container>

            <Row className = "udayppu">
            </Row>
        
            <Row className = "rowContainer">
                <Col className = "colContainer" sm = "6">

                <div>

                <div>
                    <h3>Add Item</h3>
                </div>


                <form onSubmit = {handleSubmit(onSubmit)}>
                    
                <div>
                <FormControl >
                {/* name */}
                <InputLabel htmlFor="email">Item Name</InputLabel>
                <Input inputRef = {register} type="text" name = "name" id="name" aria-describedby="emailText" />
                </FormControl>
                </div>

                {/* price */}
                <div>
                <FormControl >
                <InputLabel htmlFor="password">Price</InputLabel>
                <Input inputRef = {register} type="text" name = "price" id="price"/>
                </FormControl>
                </div>


                {/* description */}
                <div>
                <FormControl >
                <InputLabel htmlFor="password">Description</InputLabel>
                <Input inputRef = {register} type="text" name = "description" id="description"/>
                </FormControl>
                </div>


                {/* quantity */}
                <div>
                <FormControl >
                <InputLabel htmlFor="password">Quantity</InputLabel>
                <Input inputRef = {register} type="text" name = "quantity" id="quantity"/>
                </FormControl>
                </div>

                {/* category */}
                <div>
                
                <ReactHookFormSelect label = "category" id="category" name = "category" defaultValue="M"  control = {control}>
                <MenuItem value="M">Mens</MenuItem>
                <MenuItem value="W">Womens</MenuItem>
                <MenuItem value="SB">Shoes and Bags</MenuItem>
                <MenuItem value="AC">Accesories</MenuItem>
                </ReactHookFormSelect>
                
                </div>

                <div className = "inputImage">
                    <Input inputRef = {register} name = "image" id="image" className = "inputImage" type="file"/>
                </div>
                
                <div style = {{marginTop:"1rem"}}>
                <button type="submit" className = "buttonStyle btn-three ">Add Item</button>
                </div>
                
                
                
                </form>


                </div>

                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AddItemPage
