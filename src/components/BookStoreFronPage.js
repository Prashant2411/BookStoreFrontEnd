import React, { Component } from 'react'
import ListOfBooks from '../components/ListOfBooks';
import AppBar from '../components/AppBar'
import { getBookList, getBooksCount} from '../Configuration/BookConfig'
import getSearchedBooks from "../Configuration/Search";
import Styles from '../css/snackbar.module.css'

class BookStoreFronPage extends Component {

    state = {
        bookList: [],
        searchKey:"",
        noOfRecord: 0,
        page: 1,
        status: "",
        isActive: false
    }

    getBookLists = () => {
        getBookList(this.state.page).then(res => {
            this.setState({ bookList: res.data })
        }).catch(err => {
            console.log(err);
        })
        this.totalItems("");
    }

    UNSAFE_componentWillMount() {
        this.getBookLists();
        this.totalItems("");
    }

    totalItems = async (attribute) => {
        await getBooksCount(attribute).then((res) => {
            this.setState({ noOfRecord: res.data })
            console.log(this.state.noOfRecord,"item cout");
        })
    }

    handleChange = async (event, value) => {
        await this.setState({ page: value });
        this.getBookLists()
    };

    getSearchedBookList = async (attribute) => {
        await getSearchedBooks(attribute).then(res => {
            this.setState({bookList: res.data})
            }).catch((err)=>{
               console.log(err,"eee")
                this.setState({ status: "NO RECORD FOUND"});
                this.openSnackBar()
        });
        await this.totalItems(attribute);
    }

    openSnackBar = () => {
        this.setState({ isActive: true }, () => {
            setTimeout(() => {
                this.setState({ isActive: false });
            }, 3000);
        });
    }
    
    render() {
        return (
            <div>
                <AppBar searchBookList={this.getSearchedBookList} bookList={this.getBookLists}/>
                <ListOfBooks bookList={this.state.bookList} handleChange={this.handleChange} noOfRecord={this.state.noOfRecord}/>

                <div className={this.state.isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
                    {this.state.status}
                </div>
            </div>
        )
    }
}

export default BookStoreFronPage
