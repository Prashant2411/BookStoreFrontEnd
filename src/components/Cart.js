import React, { Component, Fragment } from "react";
import CartDetails from "./CartDetails";
import ControlledExpansionPanels from "./CustomerDetails";
import "../css/Cart.css";
import OrderSummary from "./OrderSummary";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { addOrderData } from "../Configuration/BookConfig";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookBunch: JSON.parse(localStorage.getItem("cartBook")),
      cartBookCount: JSON.parse(localStorage.getItem("cartBook")),
      cartSubTotal: 0,
      expanded: false,
      expanded2: false,
      customerDetails: [],
      orderDetails: []
    };
  }

  UNSAFE_componentWillMount=async()=>{
    if (localStorage.getItem('cartBook')) {
       await this.setState({bookBunch:JSON.parse(localStorage.getItem("cartBook"))})
       await this.setState({cartBookCount:JSON.parse(localStorage.getItem("cartBook")).length})
       await this.updateCartSubtotal();
       await this.updateQuantity();
    }else{
      this.homePage()
    }
  }

  updateBookQuantity = async (bookId, bookQuantity) => {
    const index = this.state.bookBunch.findIndex(book => {
      return book.id === bookId;
    });
    const book = Object.assign({}, this.state.bookBunch[index]);
    book.quantity = bookQuantity;
    const books = Object.assign([], this.state.bookBunch);
    books[index] = book;
    await this.setState({ bookBunch: books });
    await localStorage.setItem(
      "cartBook",
      JSON.stringify(this.state.bookBunch)
    );
  };

  removeBook = async prop => {
    await this.setState(prevState => ({
      bookBunch: prevState.bookBunch.filter(el => el.bookName !== prop.bookName)
    }));
    await localStorage.setItem(
      "cartBook",
      JSON.stringify(this.state.bookBunch)
    );
  };

  updateCartSubtotal = async () => {
    await this.setState({ cartSubTotal: 0 });
    await this.state.bookBunch.map((value, index) => {
      return this.setState(prev => ({
        cartSubTotal: prev.cartSubTotal + value.bookPrice * value.quantity
      }));
    });
    await this.updateQuantity();
  };

  handleExpantion = value => {
    this.setState({
      [value]: true
    });
  };

  updateQuantity = async () => {
    await this.setState({ cartBookCount: 0 });
    await this.state.bookBunch.map((value, index) => {
      return this.setState(prev => ({
        cartBookCount: prev.cartBookCount + value.quantity
      }));
    });
  };

  homePage = () => {
    this.props.history.push({
      pathname: "/"
    });
  };

  orderSuccessfull = () => {
    this.props.history.push({
      pathname: "/ordersuccessfull"
    });
  };

  customerDetails = async prop => {
    await this.setState({ customerDetails: prop });
  };

  checkout = async () => {
    await this.state.bookBunch.map(value => {
      this.state.orderDetails.push({
        bookIds: value.id,
        noOfCopies: value.quantity,
        orderPrice: this.state.updateCartSubtotal,
        customerName: this.state.customerDetails.Name,
        mobileNo: this.state.customerDetails.PhoneNumber,
        pincode: this.state.customerDetails.Pincode,
        locality: this.state.customerDetails.Locality,
        address: this.state.customerDetails.Address,
        city: this.state.customerDetails.City,
        town: this.state.customerDetails.Town,
        type: this.state.customerDetails.Type
      });
    });
    await addOrderData(this.state.orderDetails).then(res => {
      localStorage.clear();
      localStorage.setItem("orderId", res.data.orderBookDetail);
    }).catch( err => {

    });
    await this.orderSuccessfull()

  };

  render() {
    return (
      <Fragment>
        <AppBar
          cartBooks={(this.state.bookBunch !== null) ? this.state.bookBunch : []}
          cartBooksCount={(this.state.bookBunch !== null) ? this.state.bookBunch.length : 0}
          homePage={this.homePage}
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
            customerDetails={this.customerDetails}
          />
          <OrderSummary
            books={this.state.bookBunch}
            subTotal={this.state.cartSubTotal}
            expanded2={this.state.expanded2}
            checkout={this.checkout}
            booksInCart={this.state.cartBookCount}
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Cart;
