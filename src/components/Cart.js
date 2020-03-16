import React, { Component } from 'react'
import CartDetails from './CartDetails'
import '../css/Cart.css'

export class Cart extends Component {
    render() {
        return (
            <div className="CartDiv">
                <CartDetails />
            </div>
        )
    }
}

export default Cart
