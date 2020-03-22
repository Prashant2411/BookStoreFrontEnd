import React, { Component, Fragment } from "react";
import CartDetails from "./CartDetails";
import ControlledExpansionPanels from "./CustomerDetails";
import "../css/Cart.css";
import OrderSummary from "./OrderSummary";
import AppBar from "./AppBar";
import Footer from "./Footer";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookBunch: this.props.history.location.state,
      cartBooks: this.props.history.location.state.length,
      cartSubTotal: 0,
      expanded: false,
      expanded2: false
    };
  }

  UNSAFE_componentWillMount(){
    this.props.history.location.state.map((value,index)=>{
      this.setState((prev)=>({
        cartSubTotal: prev.cartSubTotal + value.bookPrice
      }))
    })
  }

  updateCartBooks = async (prop, a) => {
    await this.state.bookBunch.push(prop);
    await this.UNSAFE_omponentWillMount(prop.bookPrice);
  };

  removeBook = prop => {
    this.setState(prevState => ({
      bookBunch: prevState.bookBunch.filter(el => el.bookName !== prop.bookName)
    }));
    // this.props.removeBookFromParent(prop);
  };

  updateCartSubtotal = (prevValue, newValue) => {
    this.setState({
      cartSubTotal: this.state.cartSubTotal + newValue - prevValue
    });
    console.log(this.props.location.pathname);

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
    // this.props.cartBooks(this.state.cartBooks)
  };

  render() {
    return (
      <Fragment>
        <AppBar
          displayType={this.updateDisplayType}
          cartBooks={this.state.bookBunch}
          cartBooksCount={this.state.bookBunch.length}
        />
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
      <Footer/>
      </Fragment>
    );
  }
}

export default Cart;
