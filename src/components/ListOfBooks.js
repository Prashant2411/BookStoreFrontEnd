import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'
import Pagination from '@material-ui/lab/Pagination';

export class ListOfBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noOfRecord: 0,
            page: 1
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
                {books}
                <Pagination shape="rounded" className="pagination" count={Math.ceil(this.props.noOfRecord / 12)} page={this.state.page} onChange={this.props.handleChange} />
            </div>
        )
    }
}

export default ListOfBooks
