import React, { Component } from 'react'
import '../css/BookDetails.css'

class BookStorePagination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            current: 3,
            display: 3,
            number: 3
        }
    }
    componentWillReceiveProps(){
        this.setState({total:Math.ceil(this.props.pageNo)})
    }
    render() {
        return (
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" class="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
                {console.log("no of reco",this.state.total)}
            </div>
        )
    }
}

export default BookStorePagination
