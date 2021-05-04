import React from 'react'
import './shoppingItem.component.css'

function ShoppingItem({item,onItemClick}) {
    return (
        <div className = "shoppingItemWrapper" onClick = {onItemClick(item._id)}>
            <div className = "shoppingImageWrapper">
            <img src = "https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
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
