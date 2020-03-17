import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'
import { getBookList } from '../Configuration/BookConfig'

export class ListOfBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookList: []
        }
    }

    getBookLists =()=> {
        getBookList().then(res => {
            this.setState({ bookList: res.data })
        }).catch(err => {
            console.log(err);
        })
    }

    UNSAFE_componentWillMount() {
        this.getBookLists();
    }
    
    render() {        
        const books = this.state.bookList.map((value, index) => {
            return(
            <BookDetails key={value.id} bookList={value}/>
            )
        })

        return (
            <div className="listDiv">
                {books}
            </div>
        )
    }
}

export default ListOfBooks
