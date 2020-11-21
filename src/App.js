import React , {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import DefaultPage from './DefaultPage';
import {Route} from 'react-router-dom';
import SearchedBooks from './SearchedBooks';
//import {Link} from 'react-router-dom';
//import {Switch} from 'react-router-dom';

class BooksApp extends Component {
  state = {
    books:[],
    searched:[],
    //showSearchPage: false
  };

 type =[
    {type: 'currentlyReading', title: 'Currently Reading'},
    {type: 'wantToRead', title: 'Want to Read'},
    {type: 'read', title: 'Read'}
];


fetch() {
  BooksAPI.getAll().then( books => {
    this.setState({
      books,
      isLoading: false,
    })
  });
}


componentDidMount() {
 this.fetch();
}


updateQuery=(query)=>{
    this.setState(()=>({
      query:query.trim()
    }))
  BooksAPI.search(query).then((result)=>{
    if (query !== '')
    this.setState({searched:result});
    else 
    this.setState({searched:null});
  });
 }


updateShelf= (book, newShelf) => {
//  const {books}= this.state.books
      BooksAPI.update(book,newShelf).then(() =>{
      book.shelf = newShelf
      const searchedBook =this.state.books.filter((result) =>result.id !== book.id)
      searchedBook.push(book)
      this.setState({
        books: searchedBook})
  })
}

  render() {
    return (
    <div className ='app'>
      <Route 
         exact path= '/'
         render={()=>(
          <DefaultPage
           books ={this.state.books}
           searched={this.state.searched}
           type={this.type}
           updateShelf={this.updateShelf}
           />
         )}
         />

      <Route
          path="/search"
          render={() => (
            <SearchedBooks
               updateShelf={this.updateShelf}
               updateQuery={this.updateQuery}
               searched={this.state.searched}
               books={this.state.books}
               type={this.type}            
                />
              )}
            />  
     </div>
      )
    }
}
export default BooksApp;
