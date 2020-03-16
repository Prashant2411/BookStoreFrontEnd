import React, { Component } from 'react'
import CartBook from './CartBook'
import Button from '@material-ui/core/Button';

export class CartDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookBunch: [{
                bookName: "Few thing left unsaid",
                authorName: "Sudeep Nagarkar",
                bookPrice: 1400,
                noOfCopies: 10,
            },
            {
                bookName: "Part of life",
                authorName: "Sudeep Nagarkar",
                bookPrice: 1500,
                noOfCopies: 1,
            }],
            cartBooks: 0,
            cartSubTotal: 0
        }
        this.parentComponent = React.createRef()
    }
    UNSAFE_componentWillMount = async () => {
        await this.setState({ cartBooks: this.state.bookBunch.length })

        for (var i = 0; i < this.state.cartBooks; i++) {
            this.setState({ cartSubTotal: (this.state.cartSubTotal + this.state.bookBunch[i].bookPrice) })
        }
    }

    updateQuantity = async(prop) => {
        await this.setState({ cartBooks: this.state.cartBooks + prop })
        console.log(prop)
    }

    removeBook = (prop) => {
        this.setState(prevState => ({
            bookBunch: prevState.bookBunch.filter(el => el.bookName !== prop.bookName)
        }));
    }

    updateCartSubtotal = (prevValue, newValue) => {
        this.setState({ cartSubTotal: this.state.cartSubTotal + newValue - prevValue })
    }

    render() {
        return (
            <div className="cartDetailsDiv">
                <h4 className="MyCartH">My Cart ({this.state.cartBooks})</h4>
                {(this.state.bookBunch.length > 0) ?
                    this.state.bookBunch.map((value) => {
                        return (
                            <CartBook key={value.bookName + value.bookName} param={value}
                                removeBook={this.removeBook} updateQuantity={this.updateQuantity}
                                updateCartSubtotal={this.updateCartSubtotal} />
                        );
                    }
                    ) : <h3>Your cart is empty</h3>}
                <h3 className="subTotal">SubTotal : {this.state.cartSubTotal}</h3>
                {(this.state.bookBunch.length > 0) ? <Button variant="contained" className="placeOrderButton" color="primary" disableElevation>
                    PLACE ORDER
                </Button> : <h6> </h6>}
            </div>
        )
    }
}

export default CartDetails
