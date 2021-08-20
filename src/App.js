import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./components/book"
import Shelf from "./components/shelf"
import Read from './components/myRead'
import Change from "./components/changeShelf"
import Search from "./components/search"
import myRead from './components/myRead'
const shelfs = [{shelfName:"Currently Reading",shelfId:"currentlyReading"},
                {shelfName:"Want to Read",shelfId:"wantToRead"},
                {shelfName:"Read",shelfId:"read"}
]
class BooksApp extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    search:"",
    searchRes:[],
    showSearchPage: false
  }
  this.handleChange = this.handleChange.bind(this);
}
  
   componentDidMount(){
      BooksAPI.getAll().then(res=>{
     this.setState({books:res
      } )                               
    
    })
    
   
} 
 changeSearch = ()=>{
   this.setState({showSearchPage:false,search:"",searchRes:[]})
 }
async handleChange(event){
       
  await this.setState({
    
     search: event.target.value
    
      
  });
  try{
  
  BooksAPI.search(event.target.value).then(res=>{
    console.log(res,"res from search")
   
    const temp = res
   this.setState({searchRes:res})
   console.log(this.state.searchRes,"searchRes")
  })
}
catch(err){console.log(err)}
}


 handleShelfUpdate = async(book,event)=>{
    console.log(book,"this is book");
    console.log(event,"this is event")
    await BooksAPI.update(book,event)
    BooksAPI.getAll().then(res=>{
      this.setState({books:res
       } )                               
     })
 }
  render() {
   
  
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          
        
      <Search search={this.state.search} handleChange={this.handleChange} searchRes={this.state.searchRes}
      handleShelfUpdate={this.handleShelfUpdate} changeSearch={this.changeSearch}/>  ) 
      
      : (
          <div className="list-books">
           <Read/>
            <div className="list-books-content">
              <div>
            
                    
              {shelfs.map(shelf=> <Shelf handleShelfUpdate={this.handleShelfUpdate}  book={this.state.books} shelf={shelf}/>)}
                
               
                
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
