import React ,{Component} from 'react';
import No_image from "./img/No_image.png";
//import SearchedBooks from './SearchedBooks';

class Books extends Component{
    render(){
     const {book,books,updateShelf,type}=this.props;
     const image = book.imageLinks ? book.imageLinks.thumbnail : No_image;
    
     /*const isExist = (book) => {
        if (books.some((b) => b.id === book.id)) {
          return true;
        } else return false;
      };
      const found = books[books.findIndex((b) => b.id === book.id)];
    */
     /*const Bookshelf = () =>{
         if (searched.length>0)
         {
             books.maps((book)=>{
             searched.map((book)=>{
             if(book.id===searched.id)
             {searched.shelf === book.shelf}
             })
            })
         }
     }*/
       return(
        <div className="book">
            <div className="book-top">
               <div className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                
                <div className="book-shelf-changer">
                    <select
                        onChange={(event) => updateShelf(book,event.target.value)}
                        value={
                        book.shelf
                            ?book.shelf
                            //:isExist
                            //?found
                            : "none"
                        }>
                        <option value='moveTo' disabled>Move to... </option>

                         {type.map((type) => (
                         <option value={type.name}>{type.type}</option>
                         ))}

                        <option value="none">None</option>
                    </select>
                </div>
            </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
 
        </div>
        );
    }
}
export default Books;