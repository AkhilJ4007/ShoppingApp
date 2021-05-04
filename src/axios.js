import Axios from "axios";

export const axios = Axios.create({ baseURL: "http://localhost:3000",
headers: {'Content-Type': 'application/json'}
});


//---------- SHOP AXIOS ---------
// Get All Shopping Items
export const getAllShoppingItems = async () => {
    try {
    const shoppingItems = await axios.get('/product/getProducts')

    return shoppingItems.data
    } catch(err) {
    return console.error(err)
    }
}
// get shopping item
export const getShoppingItem = (productID) => async () => {
    try {
        //console.log("Product Id ",productID)
    const shoppingItems = await axios.get('/product/getProduct',{params:{id: productID }})

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
export const login = async () => {

    try{
        const user = await axios.get('/auth/signIn')
        return user.data
    }
    
    catch(err) {
        return console.error(err)
    }

}

//login
export const logout = async () => {

    try{
        const logout = await axios.get('/auth/logout',{withCredentials: true})

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
    const shoppingItems = await axios.post('/cart/addItem',{productId: itemId, quantity: numberOfitems},{withCredentials: true})

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
