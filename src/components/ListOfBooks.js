import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'
import { getBookList, getBooksCount ,getSearchedBooks} from '../Configuration/BookConfig'
import Pagination from '@material-ui/lab/Pagination';

export class ListOfBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookList: [],
            search: '',
            noOfRecord: 0,
            page: 1
        }
    }

    getBookLists = () => {
        getBookList(this.state.page).then(res => {
            this.setState({ bookList: res.data })
        }).catch(err => {
            console.log(err);
        })
    }

    UNSAFE_componentWillMount() {
        this.getBookLists();
        this.totalItems();
    }

    totalItems = async () => {
        await getBooksCount(this.state.search).then((res) => {
            this.setState({ noOfRecord: res.data })
            console.log(this.state.noOfRecord);

        })
    }

  
    handleChange = async (event, value) => {
        console.log(value);
        await this.setState({ page: value });
        this.getBookLists()
    };

    render() {
        const books = this.state.bookList.map((value, index) => {
            return (
                <BookDetails key={value.id} bookList={value} />
            )
        })

        return (
            <div className="listDiv">
                {books}
                <Pagination shape="rounded" className="pagination" count={Math.ceil(this.state.noOfRecord / 12)} page={this.state.page} onChange={this.handleChange} />
            </div>
        )
    }
}

export default ListOfBooks
