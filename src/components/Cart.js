import React, { Component } from "react";
import CartDetails from "./CartDetails";
import ControlledExpansionPanels from "./CustomerDetails";
import "../css/Cart.css";
import OrderSummary from "./OrderSummary";

export class Cart extends Component {
  constructor(props) {
    super(props);
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
        cartSubTotal: 0,
        expanded: false
    }
  }

  handleExpantion = () => {
    this.setState({
      expanded: true
    });
  };

  render() {
    return (
      <div className="CartDiv">
        <CartDetails handleExpantion={this.handleExpantion} />
        <ControlledExpansionPanels expanded={this.state.expanded} />
        <OrderSummary books={this.state.bookBunch}/>
      </div>
    );
  }
}

export default Cart;
