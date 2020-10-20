import React from 'react'
import './category.component.css'

function Category({img}) {
    return (
        <div className = "categoryWrapper">
            <img src = {img}/>
        </div>
    )
}

export default Category
