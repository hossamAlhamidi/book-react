import React, { Component } from 'react'
import book from './book'
import Book from "./book"
export default class search extends Component {
    constructor(props){
        super(props)
        this.state={
            showSearchPage: false
        }
    }
    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={this.props.changeSearch}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input name="search"type="text" value={this.props.search} onChange={this.props.handleChange} placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> 

               {
                 typeof this.props.searchRes=="undefined"?console.log("undefined")
                : this.props.searchRes.length>0?
              this.props.searchRes.map(book=>
                typeof book.imageLinks =="undefined"?console.log("undefined"):
                
                
               
                 
             <Book book={book} handleShelfUpdate={this.props.handleShelfUpdate} /> 
                
                 
                
            ):this.props.search==""?"":"there is no book on such name"
                     
               }
              
              
              </ol>
            </div>
            
          </div>
          
          
        )
    }
}
