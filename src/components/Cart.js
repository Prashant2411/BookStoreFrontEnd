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
      expanded2: false,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.history.location.state.map((value, index) => {
      this.setState((prev) => ({
        cartSubTotal: prev.cartSubTotal + value.bookPrice
      }))
    })
    this.updateQuantity()
  }

  updateBookQuantity = async (bookId, bookQuantity) => {
    console.log("hii im in updateBookQ", bookId, bookQuantity);
    const index = this.state.bookBunch.findIndex((book) => {
      return book.id === bookId
    })
    const book = Object.assign({}, this.state.bookBunch[index])
    book.quantity = bookQuantity;
    const books = Object.assign([], this.state.bookBunch);
    books[index] = book;
    await this.setState({ bookBunch: books })
    console.log(this.state.bookBunch, "value");
  }

  removeBook = prop => {
    this.setState(prevState => ({
      bookBunch: prevState.bookBunch.filter(el => el.bookName !== prop.bookName)
    }));
  };

  updateCartSubtotal = async () => {
    await this.setState({ cartSubTotal: 0 })
    await this.state.bookBunch.map((value, index) => {
      this.setState((prev) => ({
        cartSubTotal: prev.cartSubTotal + value.bookPrice * value.quantity
      }))
    })
    await this.updateQuantity()
  };

  handleExpantion = value => {
    this.setState({
      [value]: true
    });
  };

  updateQuantity = async () => {
    await this.setState({ cartBooks: 0 })
    await this.state.bookBunch.map((value, index) => {
      this.setState((prev) => ({
        cartBooks: prev.cartBooks + value.quantity
      }))
    })
  };

  render() {
    return (
      <Fragment>
        <AppBar
          cartBooks={this.state.bookBunch}
          cartBooksCount={this.state.cartBooks}
        />
        <div className="CartDiv">
          <CartDetails
            handleExpantion={this.handleExpantion}
            books={this.state}
            updateCartSubtotal={this.updateCartSubtotal}
            removeBook={this.removeBook}
            updateQuantity={this.updateQuantity}
            updateBookQuantity={this.updateBookQuantity}

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
        <Footer />
      </Fragment>
    );
  }
}

export default Cart;
