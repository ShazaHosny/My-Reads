import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import Books from './Books';

class SearchedBooks extends Component{
    render(){
      // const {query}= this.state
      const{books,searched,updateQuery,type,updateShelf}=this.props
      
      /* const ShowingBooks =  query === ""
          ? books
          : updateQuery.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.authors.toLowerCase().includes(query.toLowerCase())
            );
        */
        return(
            <div className='search-books'>
                <div className='search-books-bar'>
                <Link to="/" className="close-search">Close</Link>
                   <div className="search-books-input-wrapper">
                <input
                type='text'
                placeholder='Search by title or author'
                onChange={(event)=>{updateQuery(event.target.value);}}
                />
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                {searched && searched.length>0 
                  ?  searched.map((book) =>(
                      <Books
                      book={book}
                      books={books}
                      updateShelf={updateShelf}
                      type={type}
                      />
                  ))
                  : null
                  }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchedBooks;