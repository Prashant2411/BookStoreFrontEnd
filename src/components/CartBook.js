import React, { Component } from 'react'
import source from '../asserts/first.jpg'
import minus from '../asserts/minus.png'
import plus from '../asserts/plus.png'

export class CartBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookCount: 1,
            nUnitOfBookPrice: this.props.param.bookPrice,
            prevValue: this.props.param.bookPrice,
            quantity: 1
        }
        this.timer = null;
    }

    inputValue = async (event) => {
        return this.state.bookCount < 1 || this.state.bookCount > this.props.param.noOfCopies 
        ? this.setState({ bookCount: 1 }) : this.imputHandler();

    }

    imputHandler = () => {
        this.noOfUnitPrice()
        this.props.updateQuantity(this.state.bookCount - this.state.quantity)
        this.setState({ quantity: this.state.bookCount })
    }


    noOfUnitPrice = async () => {
        await this.setState(prev => ({
            nUnitOfBookPrice: this.state.bookCount * this.props.param.bookPrice
        }));
        this.props.updateCartSubtotal(this.state.prevValue, this.state.nUnitOfBookPrice)
        this.setState({ prevValue: this.state.nUnitOfBookPrice })
    }

    decreaseCount = async () => {
        if (this.state.bookCount > 1) {
            await this.setState(prevState => ({
                bookCount: prevState.bookCount - 1
            }))
            this.noOfUnitPrice()
            this.props.updateQuantity(-1)
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    increaseCount = async () => {

        if (this.props.param.noOfCopies > this.state.bookCount) {
            await this.setState(
                prevState => ({
                    bookCount: prevState.bookCount + 1
                })
            )
            this.noOfUnitPrice()
            this.props.updateQuantity(1)
            this.setState({ quantity: this.state.quantity + 1 })
        }
    }

    removeBookEvent = async () => {
        this.props.updateQuantity(-this.state.bookCount)
        await this.setState({ bookCount: 0, nUnitOfBookPrice: 0 })
        this.props.updateCartSubtotal(this.state.prevValue, this.state.nUnitOfBookPrice)
        this.props.removeBook(this.props.param)
        this.setState({ quantity: 0 })
    }

    render() {
        return (
            <div className="bookDivHolder">
                <img src={source} className="cartBookImg" alt="bookImage" />
                <div className="cartBookDetails">
                    <h5 className="titleFont">{this.props.param.bookName}</h5>
                    <p className="authorFont"> {this.props.param.authorName}</p>
                    <h4 className="priceFont">{this.props.param.bookPrice}</h4>
                    <div className="cartButtonRow">
                        <button className="bookDetailsButton">
                            <img className="bookDetailsButtonImg" alt="minus" src={minus} onClick={this.decreaseCount}>
                            </img>
                        </button>
                        <input type="number" className="cartBookCount" value={this.state.bookCount} onChange={event => this.setState({ bookCount: parseInt(event.target.value) })} onBlur={this.inputValue} />
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
