import React from 'react'
import './category.component.css'


function Category({img}) {
    return (
        <div className = "categoryWrapper">
            <img src = {img}/>
            <div className = "itemBox">
                <div className = "itemDesc">
                    <div className = "heading">
                        Hello
                    </div>
                    <div className = "description">
                        Hello
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
