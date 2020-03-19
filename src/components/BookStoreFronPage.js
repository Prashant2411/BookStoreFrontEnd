import React, { Component } from 'react'
import ListOfBooks from '../components/ListOfBooks';
import AppBar from '../components/AppBar'
import { getBookList, getBooksCount} from '../Configuration/BookConfig'
import getSearchedBooks from "../Configuration/Search";

class BookStoreFronPage extends Component {

    state = {
        bookList: [],
        searchKey:"",
        noOfRecord: 0,
        page: 1
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
        this.totalItems("");
    }

    totalItems = async (attribute) => {
        await getBooksCount(attribute).then((res) => {
            this.setState({ noOfRecord: res.data })
            console.log(this.state.noOfRecord);
        })
    }

    handleChange = async (event, value) => {
        await this.setState({ page: value });
        this.getBookLists()
    };

    getSearchedBookList = async (attribute) => {
        await getSearchedBooks(attribute).then(res => {
            this.setState({bookList: res.data})
        });
        await this.totalItems(attribute);
    }
    
    render() {
        return (
            <div>
                <AppBar searchBookList={this.getSearchedBookList} bookList={this.getBookLists}/>
                <ListOfBooks bookList={this.state.bookList} handleChange={this.handleChange} noOfRecord={this.state.noOfRecord}/>
            </div>
        )
    }
}

export default BookStoreFronPage
