import React from 'react'
import './shoppingItem.component.css'
const imageUrl = "https://shopping-app-akj.herokuapp.com/product/getImage/"
function ShoppingItem({item,onItemClick}) {
    const newImageUrl = imageUrl + item.imageName
    return (
        <div className = "shoppingItemWrapper" onClick = {onItemClick(item._id)}>
            <div className = "shoppingImageWrapper">
            <img src = {newImageUrl} />
            </div>
            <div>
                {item.name}
            </div>
            <div>
                {"$ " + item.price}
            </div>
            <div>
                {item.description}
            </div>
            
        </div>
    )
}

export default ShoppingItem
