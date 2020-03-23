import React, { Component } from 'react'
import CartBook from './CartBook'
import Button from '@material-ui/core/Button';

export class CartDetails extends Component {
    constructor(props) {
        super(props)
        this.parentComponent = React.createRef()
    }

    handleExpantion = () => {
        document.getElementById('placeOrderButton').style.display = 'none'
        this.props.handleExpantion('expanded')
    }

    render() {
        return (
            <div className="cartDetailsDiv">
                <h4 className="MyCartH">My Cart ({this.props.books.bookBunch.length})</h4>
                {(this.props.books.bookBunch.length > 0) ?
                    this.props.books.bookBunch.map(value => {
                        return (
                            <CartBook key={value.id} param={value}
                                removeBook={this.props.removeBook}
                                updateCartSubtotal={this.props.updateCartSubtotal}
                                updateBookQuantity={this.props.updateBookQuantity} />
                        );
                    }
                    ) : <h3>Your cart is empty</h3>}
                <h3 className="subTotal">SubTotal : {this.props.books.cartSubTotal}</h3>
                {(this.props.books.bookBunch.length > 0) ? <Button onClick={this.handleExpantion} id="placeOrderButton" variant="contained" className="placeOrderButton" color="primary" >
                    PLACE ORDER
                </Button> : <h6> </h6>}
            </div>
        )
    }
}

export default CartDetails
