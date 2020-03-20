import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'
<<<<<<< HEAD
import Pagination from '@material-ui/lab/Pagination';
import DropDownList from './DropDownList';
=======
import { getBookList,getBooksCount } from '../Configuration/BookConfig'
import DropDownList from './DropDownList'
>>>>>>> 80f3542de67d79dc4d780a7d998b3e3a868ad6a4

export class ListOfBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noOfRecord: 0,
        }
    }

    render() {
        const books = this.props.bookList.map((value, index) => {
            return (
                <BookDetails key={value.id} bookList={value} />
            )
        })

        return (
            <div className="listDiv">
<<<<<<< HEAD
                <div className="bookItemsDiv">
                <h2 className="bookH2">Books <span className="priceFont" style={{color:"gray"}}> ({this.props.noOfRecord} Items)</span></h2>
                <DropDownList/>
                </div>
                {books}
                <Pagination shape="rounded" className="pagination" count={Math.ceil(this.props.noOfRecord / 12)} 
                     onChange={this.props.handleChange} />
=======
                <DropDownList/>
                <br></br>
                {books}
>>>>>>> 80f3542de67d79dc4d780a7d998b3e3a868ad6a4
            </div>
        )
    }
}

export default ListOfBooks
