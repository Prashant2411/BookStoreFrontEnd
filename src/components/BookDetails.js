import React, { Component } from 'react'
import '../css/BookDetails.css'
import success from '../css/1.jpg'
import InStock from './InStock'
import OutOfStock from './OutOfStock'

export class BookDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookTitle: '',
            autherName: '',
            bookPrice: 0,
            bookDetails: '',
            imageSrc: '',
            stock: this.props.stock,
        }
    }


    render() {

        return (
            <div className="bookDiv tooltip">
                <span class="tooltiptext"><h2 className="bookDetailsH">Book Details</h2><br/>{this.props.bookDetails}</span>
                <div className="imageDiv">
                    <img className="bookImage" src={success} alt="no Cover"/>
                    {(this.state.stock === "0")
                        ? <h3 className="outOfStock">Out Of Stock</h3>
                        : <h1></h1>
                    }
                </div>
                <div className="bookProperty">
                    <p className="titleFont">{this.props.bookTitle}</p><br />
                    <p className="authorFont">{this.props.autherName}</p><br />
                <p className="priceFont">Rs.{this.props.bookPrice }</p>
                </div> 
                <div className="bookDivButton">
                    {(this.state.stock > 0)
                        ? <InStock />
                        : <OutOfStock />
                    }
                </div>
            </div>
        )
    }
}

export default BookDetails
