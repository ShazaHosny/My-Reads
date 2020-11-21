import React,{Component} from "react"
import Shelf from './Shelf';

class DeafultPage extends Component{
    render(){
        const{books,type,updateShelf,searched}=this.props
        return(
         <div>
             <div className='list-book'>
             <div className='list-books-title'>
                <h1>MyReads</h1>
             </div>
                 <Shelf
                  books={books}
                  searched={searched}
                  type={type}
                  updateShelf={updateShelf}/>
             </div>
         </div>
        )
    }
}

export default DeafultPage;