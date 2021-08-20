import React, { Component } from 'react'
import Book from "./book"
import * as BooksAPI from '../BooksAPI'
export default class changeShelf extends Component {
    constructor(props){
    super(props)
    this.state={
        shelf:""
    }

    }
  
    
   handleUpdate = (event)=>{
       this.props.handleShelfUpdate(this.props.book,event.target.value)
      // console.log(event.target.value,"this is event");
//    console.log(this.props.book,"this is book");
   }
       
    render() {
        //onClick={this.props.handleShelfUpdate(this.props.book)}
        return (
            <div className="book-shelf-changer">
                              <select value={this.props.book.shelf} onChange={this.handleUpdate}>
                                <option value="move" disabled>Move to...</option>
                                <option value="" hidden></option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option  value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
        )
    }
}
