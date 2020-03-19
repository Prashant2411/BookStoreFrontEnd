import React, { Component } from 'react'
import ListOfBooks from '../components/ListOfBooks';
import AppBar from '../components/AppBar'

class BookStoreFronPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchKey:""
        }
    }

    setSearchKey=(props)=>{
        this.setState({searchKey:props})
    }
    
    render() {
        return (
            <div>
                <AppBar/>
                <ListOfBooks/>
            </div>
        )
    }
}

export default BookStoreFronPage
