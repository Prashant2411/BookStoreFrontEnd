import React from 'react'
import '../css/BookDetails.css'

function InStock() {
    return (
        <React.Fragment>
                <div className="bookDivButton">
                    <button class="bookButton bookButton1">Add To Bag</button>
                    <button class="bookButton bookButton1">Whish List</button>
                </div>    
        </React.Fragment>
    )
}

export default InStock
