import React from 'react'
import '../css/BookDetails.css'

function InStock() {
    return (
        <React.Fragment>
                <div className="bookDivButton">
                    <button className="bookButton bookButton1">Add To Bag</button>
                    <button className="bookButton bookButton1">Wish List</button>
                </div>    
        </React.Fragment>
    )
}

export default InStock
