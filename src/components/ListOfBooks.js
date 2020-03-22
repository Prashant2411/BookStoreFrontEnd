import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'
import Pagination from '@material-ui/lab/Pagination';
import DropDownList from './DropDownList';
import Cart from './Cart';

export class ListOfBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noOfRecord: 0,
        }
        this.parentRef = React.createRef()
    }




    // addToCart = (props) => {
    //     this.state.books.push(props)
    //     console.log(this.state.books)
    //     this.parentRef.current.updateCartBooks(props, "add")
    // }

    // removeBookFromParent = (prop) => {
    //     this.state.books.pop(prop)
    // };

    render() {
        const books = this.props.bookList.map((value, index) => {
            return (
                // <BookDetails key={value.id} bookList={value} addToCart={this.addToCart} cartBooks={this.props.cartBooks}/>
                <BookDetails key={value.id} bookList={value} setCartBooks={this.props.setCartBooks}/>

            )
        })

        return (
            <React.Fragment>
                <div className="listDiv">
                    <div className="bookItemsDiv">
                        <h2 className="bookH2">Books <span className="priceFont" style={{ color: "gray" }}> ({this.props.noOfRecord} Items)</span></h2>
                        <DropDownList sortData={this.props.sortData} />
                    </div>
                    {books}
                    <Pagination shape="rounded" className="pagination" count={Math.ceil(this.props.noOfRecord / 12)}
                        onChange={this.props.handleChange} />
                </div>
                {/* <div className={this.state.flag === 2 ? "listDiv" : "hidden"}>
                    <Cart bookList={this.state.books} ref={this.parentRef} cartBooks={this.props.cartBooks} removeBookFromParent={this.removeBookFromParent} />
                </div> */}
            </React.Fragment>
        )
    }
}

export default ListOfBooks
