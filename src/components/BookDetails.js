import React, { Component } from 'react'
import '../css/BookDetails.css'
import InStock from './InStock'
import OutOfStock from './OutOfStock'
import Tooltip from '@material-ui/core/Tooltip'

export class
    BookDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookTitle: '',
            autherName: '',
            bookPrice: 0,
            bookDetails: '',
            imageSrc: '',
            stock: this.props.bookList.noOfCopies,
        }
    }

    addToCart = () => {
        this.props.addToCart(this.props.bookList)
    }

    render() {

        return (
            <div className="bookDiv ">
                <Tooltip disableFocusListener disableTouchListener title={this.props.bookList.bookDetail}>
                    <div className="imageDiv">
                        <img className="bookImage" src={this.props.bookList.bookImageSrc} alt="no Cover" />
                        {(this.state.stock === 0)
                            ? <h3 className="outOfStock">Out Of Stock</h3>
                            : <h1> </h1>
                        }
                    </div>
                </Tooltip>
                <div className="bookProperty">
                    <p className="titleFont">{this.props.bookList.bookName}</p><br />
                    <p className="authorFont">{this.props.bookList.authorName}</p><br />
                    <p className="priceFont">Rs.{this.props.bookList.bookPrice}</p>
                </div>
                <div className="bookDivButton">
                    {(this.state.stock > 0)
                        ? <InStock addToCart={this.addToCart} book={this.props.bookList} />
                        : <OutOfStock />
                    }
                </div>
            </div>
        )
    }
}

export default BookDetails
