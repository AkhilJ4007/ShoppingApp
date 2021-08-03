import axios from "axios";
import {useSelector,useDispatch} from 'react-redux'



// export const axios = Axios.create({ baseURL: "https://shopping-app-akj.herokuapp.com/",
// headers: {'Content-Type': 'application/json'}
// });


export const axiosFormData = Axios.create({ baseURL: "https://shopping-app-akj.herokuapp.com/",
headers: {'Content-Type': 'multipart/form-data'}
});


//---------- SHOP AXIOS ---------
// Get All Shopping Items
export const getAllShoppingItems =(cat) => async () => {
    try {
    
        if(cat === null){
        const shoppingItems = await axios.get('/product/getProducts')
        return shoppingItems.data
        }

        else {

            const shoppingItems = await axios.get('/product/getCategory',{params:{category: cat }})
            return shoppingItems.data

        }


    } catch(err) {
    return console.error(err)
    }
}
// get shopping item
export const getShoppingItem = (productID) => async () => {
    try {
        
    const shoppingItems = await axios.get('/product/getProduct',{params:{id: productID }})

    return shoppingItems.data
    } catch(err) {
    return console.error(err)
    }
}

// add shopping item
export const addShoppingItem = (product) => async () => {
    try {
        var formData = new FormData();
        formData.append("image",product.image[0])
        formData.append("name",product.name)
        formData.append("quantity",product.quantity)
        formData.append("description",product.description)
        formData.append("price",product.price)
        formData.append("category",product.category)
        console.log("Product",product)
    const shoppingItems = await axiosFormData.post('/product/addProduct',formData,{
        withCredentials: true
    })
    
    return shoppingItems.data

    } catch(err) {
    return console.error(err)
    }
}

//---------- USER AXIOS ---------
// get user
export const getUser = async () => {

    try{
        const user = await axios.get('/auth/profile',{withCredentials: true})
        return user.data
    }
    
    catch(err) {
        return console.error(err)
    }

}
// login
export const login = userData => async () => {

    try{
        const user = await axios.post('/auth/signIn',userData, { withCredentials: true, credentials: 'same-site'}).catch( (error) => {
            if (error.response) {
                console.log(error.response.data.message);
                throw new Error(error.response.data.message);
            }
        })
            return user.data
    }
    
    catch(err) {
        return err
    }

}


//sign_up

export const signUp = userData => async () => {

    try{
        //console.log("in Signup saaga",userData)
        const user = await axios.post('/auth/signup',userData, {withCredentials: true, credentials: 'include'}).catch( (error) => {
            if (error.response) {
                console.log(error.response.data.message);
                throw new Error(error.response.data.message);
            }
        })
            return user.data
    }
    
    
    catch(err) {
        return err
    }


}

//login
export const logout = async () => {

    console.log(" In Logout")

    try{
        const logout = await axios.get('/auth/logout', {withCredentials: true, credentials: 'include'})

        if(logout.status === 200){
            return true;
        }
    
        return false;
    }
    
    catch(err) {
        return console.error(err)
    }

}

//---------- CART AXIOS ---------

export const addCartItem = ({numberOfitems,itemId}) => async () => {
    try {
    const shoppingItems = await axios.post('/cart/addItem',{productId: itemId, quantity: numberOfitems},{withCredentials: true}).catch(err => {
        return err
    })
    console.log("add to cart axios error",shoppingItems)
    if(shoppingItems instanceof Error){
        console.log("In error cart")
        return shoppingItems
    }
    return shoppingItems.data
    } catch(err) {
    return console.error(err)
    }
}

export const getCart = () => async () => {
    try {
    const cart = await axios.get('/cart/getCart',{withCredentials: true})
    return cart.data
    } catch(err) {
    return console.error(err)
    }
}


export const deleteCartItem = (itemId) => async () => {
    try {
    const cart = await axios.get('/cart/removeItem',{params:{itemID: itemId },withCredentials: true})
    return cart.data
    } catch(err) {
    return console.error(err)
    }
}
