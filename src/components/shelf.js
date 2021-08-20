import React, { Component } from 'react'
import Book from "./book"
export default class shelf extends Component {
    constructor(props){
        super(props)
    }
    render() {
       // this.props.book.map(b=>{console.log(b.shelf)})
       // const currentShelf = this.props.book.shelf
       
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelf.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                   
                         {this.props.book.filter((book) => { 
                        
                        return book.shelf==this.props.shelf.shelfId
                        
                        } ).map(book=>{return  <Book book={book} key={book.id} handleShelfUpdate={this.props.handleShelfUpdate} />}) }
                    </ol>
                  </div>
                </div>
        )
    }
}
