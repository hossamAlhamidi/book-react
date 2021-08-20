import React, { Component } from 'react'
import Change from "./changeShelf"
export default class book extends Component {
    constructor(props){
        super(props)
        
    }
   
    
    render() {
        
    
        return (
            
            <li key={this.props.book.id}>
          <div className="book">
                          <div className="book-top">
                            <div className="book-cover" 
                            style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                            <Change book={this.props.book} handleShelfUpdate={this.props.handleShelfUpdate}/>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>      
            </li>
        )
    }
}
