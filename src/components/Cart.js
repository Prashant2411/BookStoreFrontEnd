import React, { Component } from "react";
import CartDetails from "./CartDetails";
import ControlledExpansionPanels from "./CustomerDetails";
import "../css/Cart.css";
import OrderSummary from "./OrderSummary";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookBunch: [
        {
          bookName: "Few thing left unsaid",
          authorName: "Sudeep Nagarkar",
          bookPrice: 1400,
          noOfCopies: 10
        },
        {
          bookName: "Part of life",
          authorName: "Sudeep Nagarkar",
          bookPrice: 1500,
          noOfCopies: 5
        }
      ],
      cartBooks: 0,
      cartSubTotal: 0,
      expanded: false,
      expanded2: false
    };
  }

  removeBook = prop => {
    this.setState(prevState => ({
      bookBunch: prevState.bookBunch.filter(el => el.bookName !== prop.bookName)
    }));
  };

  updateCartSubtotal = (prevValue, newValue) => {
    this.setState({
      cartSubTotal: this.state.cartSubTotal + newValue - prevValue
    });
  };

  handleExpantion = value => {
    this.setState({
      [value]: true
    });
  };

  UNSAFE_componentWillMount = async () => {
    await this.setState({ cartBooks: this.state.bookBunch.length });

    for (var i = 0; i < this.state.cartBooks; i++) {
      this.setState({
        cartSubTotal:
          this.state.cartSubTotal + this.state.bookBunch[i].bookPrice
      });
    }
  };

  updateQuantity = async prop => {
    await this.setState({ cartBooks: this.state.cartBooks + prop });
    console.log(prop);
  };

  render() {
    return (
      <div className="CartDiv">
        <CartDetails
          handleExpantion={this.handleExpantion}
          books={this.state}
          updateCartSubtotal={this.updateCartSubtotal}
          removeBook={this.removeBook}
          updateQuantity = {this.updateQuantity}
        />
        <ControlledExpansionPanels
          expanded={this.state.expanded}
          handleExpantion={this.handleExpantion}
        />
        <OrderSummary
          books={this.state.bookBunch}
          subTotal={this.state.cartSubTotal}
          expanded2={this.state.expanded2}
        />
      </div>
    );
  }
}

export default Cart;
