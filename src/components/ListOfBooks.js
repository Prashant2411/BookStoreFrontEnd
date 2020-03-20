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
            books: []
        }
        this.parentRef = React.createRef()
    }

    addToCart = (props) => {
        this.state.books.push(props)
        console.log(this.state.books)
        this.parentRef.current.updateCartBooks(props,"add")
    }

    removeBookFromParent = (prop) => {
        this.state.books.pop(prop)
      };

    render() {
        const books = this.props.bookList.map((value, index) => {
            return (
                <BookDetails key={value.id} bookList={value} addToCart={this.addToCart} />
            )
        })

        return (
            <div className="listDiv">
                <div className="bookItemsDiv">
                    <h2 className="bookH2">Books <span className="priceFont" style={{ color: "gray" }}> ({this.props.noOfRecord} Items)</span></h2>
                    <DropDownList />
                </div>
                {books}
                <Pagination shape="rounded" className="pagination" count={Math.ceil(this.props.noOfRecord / 12)}
                    onChange={this.props.handleChange} />
                <Cart bookList={this.state.books } ref={this.parentRef} removeBookFromParent={this.removeBookFromParent}/>
            </div>
        )
    }
}

export default ListOfBooks
