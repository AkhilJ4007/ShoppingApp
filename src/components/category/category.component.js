import React from 'react'
import './category.component.css'


function Category({img, name,cat,onItemClick}) {


    return (
        <div onClick = {onItemClick(cat)} className = "categoryWrapper">
            <img src = {img}/>
            <div className = "itemBox">
                <div className = "itemDesc">
                    <div className = "heading">
                        {name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
