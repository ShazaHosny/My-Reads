import React ,{Component} from 'react'
import Books from './Books';
import {Link} from 'react-router-dom'

class Shelf extends Component{
    render() {
        const {books,searched,type,updateShelf}=this.props
        return (
            <div className='list-books-content'>
            <ol>
            {books.length>0 &&
               <div>
                {type.map( (status) => {
                    const comparedBooks =books.filter( (book) =>
                    book.shelf===status.type     
                )
                    return (
                    <div className="bookshelf" >
                       <h1 className="bookshelf-title">{status.title}</h1>
                    <div className="book-shelf-books">
                       <ol className="books-grid">
                        {comparedBooks.map( (book) => (
                        <Books
                            books={books}
                            searched={searched}
                            book={book}
                            updateShelf={updateShelf}
                            type={type} 
                        />
                    ))}
                       </ol>
                    </div>
                    </div>
                     )   
                })}
                 </div> 
            }
            </ol>
            <div className="open-search">
                    <Link
                    className ='open-search-link'
                    to="/search">
                    </Link>
                    </div>
            </div>

        )
    }
}
export default Shelf;