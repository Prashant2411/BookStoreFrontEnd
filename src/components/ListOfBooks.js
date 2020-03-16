import React, { Component } from 'react'
import BookDetails from './BookDetails'
import '../css/BookDetails.css'

export class ListOfBooks extends Component {
    render() {
        return (
            <div className="listDiv">
                <BookDetails bookTitle="you are trending in my dream" autherName="Sudeep nagarkar"
                bookPrice="1200" bookDetails="Few Things Left Unsaid is a heart touching college based story. The novel is about a couple named Aditya and Riya. They meet each other through friends and fall in love. As they come closer to each other tragedy strikes. They break up.

                Will they be able to make things better between them or is this the end of their love story? What are the twists and turns coming on their way? Read Few Things left Unsaid to get the answer.
                
                About the author:
                Sudeep Nagarkar the romance writer. Sudeep Nagarkar is an engineer by education and writer by profession. The novel Few Things Left Unsaid was released in the year 2011. Sudeep Nagarkar used to write a diary, one of his friends suggested him to write it as a script and that’s how we got a romantic writer. According to Times of India article, within one fortnight more than 8000 copies of Few Things Left Unsaid was sold out." imageSrc=""
                stock="1"></BookDetails>
                <BookDetails bookTitle="you are trending in my dream" autherName="Sudeep nagarkar"
                bookPrice="1200" bookDetails="ajkslfddddddddddddddddddddddd" imageSrc=""
                stock="0"></BookDetails>
                <BookDetails bookTitle="you are trending in my dream" autherName="Sudeep nagarkar"
                bookPrice="1200" bookDetails="ajkslfddddddddddddddddddddddd" imageSrc=""
                stock="1"></BookDetails>
                <BookDetails bookTitle="you are trending in my dream" autherName="Sudeep nagarkar"
                bookPrice="1200" bookDetails="Few Things Left Unsaid is a heart touching college based story. The novel is about a couple named Aditya and Riya. They meet each other through friends and fall in love. As they come closer to each other tragedy strikes. They break up.

                Will they be able to make things better between them or is this the end of their love story? What are the twists and turns coming on their way? Read Few Things left Unsaid to get the answer.
                
                About the author:
                Sudeep Nagarkar the romance writer. Sudeep Nagarkar is an engineer by education and writer by profession. The novel Few Things Left Unsaid was released in the year 2011. Sudeep Nagarkar used to write a diary, one of his friends suggested him to write it as a script and that’s how we got a romantic writer. According to Times of India article, within one fortnight more than 8000 copies of Few Things Left Unsaid was sold out." imageSrc=""
                stock="1"></BookDetails>
                
            </div>
        )
    }
}

export default ListOfBooks
