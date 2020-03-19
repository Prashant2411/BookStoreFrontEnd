import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'
import { getBookList,getBooksCount } from '../Configuration/BookConfig'
import DropDownList from './DropDownLIst'

export class ListOfBooks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookList: [],
            search:'',
            noOfRecord:0
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
        this.totalItems();
    }

    totalItems = async () =>{
        await getBooksCount(this.state.search).then((res)=>{
            this.setState({noOfRecord:res.data})
            console.log(this.state.noOfRecord);
            
        })
    }

    render() {        
        const books = this.state.bookList.map((value, index) => {
            return(
            <BookDetails key={value.id} bookList={value}/>
            )
        })

        return (
            <div className="listDiv">
                <DropDownList/>
                {books}
            </div>
        )
    }
}

export default ListOfBooks
