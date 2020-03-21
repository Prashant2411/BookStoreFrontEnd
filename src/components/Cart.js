import React, { Component } from "react";
import CartDetails from "./CartDetails";
import ControlledExpansionPanels from "./CustomerDetails";
import "../css/Cart.css";
import OrderSummary from "./OrderSummary";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookBunch: [],
      cartBooks: 0,
      cartSubTotal: 0,
      expanded: false,
      expanded2: false
    };
  }

  updateCartBooks = async (prop, a) => {
      await this.state.bookBunch.push(prop);
      await this.UNSAFE_omponentWillMount(prop.bookPrice);
  };

  removeBook = prop => {
    this.setState(prevState => ({
      bookBunch: prevState.bookBunch.filter(el => el.bookName !== prop.bookName)
    }));
    this.props.removeBookFromParent(prop);
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

  UNSAFE_omponentWillMount = async prop => {
    await this.setState({ cartBooks: this.state.bookBunch.length });
    this.props.cartBooks(this.state.cartBooks)
    this.setState({ cartSubTotal: this.state.cartSubTotal + prop });
  };

  updateQuantity = async prop => {
    await this.setState({ cartBooks: this.state.cartBooks + prop });
    this.props.cartBooks(this.state.cartBooks)
  };

  render() {
    return (
      <div className="CartDiv">
        <CartDetails
          handleExpantion={this.handleExpantion}
          books={this.state}
          updateCartSubtotal={this.updateCartSubtotal}
          removeBook={this.removeBook}
          updateQuantity={this.updateQuantity}
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
