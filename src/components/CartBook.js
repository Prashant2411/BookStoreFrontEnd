import React, { Component } from 'react'
import minus from '../asserts/minus.png'
import plus from '../asserts/plus.png'

export class CartBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookCount: this.props.param.quantity,
            nUnitOfBookPrice: this.props.param.bookPrice,
            prevValue: this.props.param.bookPrice,
            quantity: 1
        }
        this.timer = null;
    }

    inputValue = async (event) => {
        return this.props.param.quantity < 1 || this.props.param.quantity > this.props.param.noOfCopies
            ? this.props.updateBookQuantity(this.props.param.id, 1) : this.inputHandler(event.target.value);
    }

    inputHandler = (event) => {
        this.props.updateBookQuantity(this.props.param.id,event)
        this.props.updateCartSubtotal()
    }


    decreaseCount = async () => {
        if (this.props.param.quantity > 1) {
            await this.props.updateBookQuantity(this.props.param.id, this.props.param.quantity - 1)
            this.props.updateCartSubtotal()
        }
    }

    increaseCount = async () => {
        if (this.props.param.noOfCopies > this.props.param.quantity) {
            await this.props.updateBookQuantity(this.props.param.id, this.props.param.quantity + 1)
            console.log(this.props.param.quantity)
            this.props.updateCartSubtotal()
        }
    }

    removeBookEvent = async () => {
        this.props.removeBook(this.props.param)
        this.props.updateCartSubtotal()
    }

    render() {
        return (
            <div className="bookDivHolder">
                <img src={this.props.param.bookImageSrc} className="cartBookImg" alt="bookImage" />
                <div className="cartBookDetails">
                    <h5 className="titleFont">{this.props.param.bookName}</h5>
                    <p className="authorFont"> {this.props.param.authorName}</p>
                    <h4 className="priceFont">{this.props.param.bookPrice}</h4>
                    <div className="cartButtonRow">
                        <button className="bookDetailsButton">
                            <img className="bookDetailsButtonImg" alt="minus" src={minus} onClick={this.decreaseCount}>
                            </img>
                        </button>
                        <input type="number" className="cartBookCount" value={this.props.param.quantity}
                            onChange={event => this.props.updateBookQuantity(this.props.param.id, parseInt(event.target.value))} onBlur={this.inputValue} />
                        <button className="bookDetailsButton">
                            <img className="bookDetailsButtonImg" alt="plus" src={plus} onClick={this.increaseCount} >
                            </img>
                        </button>
                        <p className="removeFont" onClick={this.removeBookEvent}>Remove</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartBook
