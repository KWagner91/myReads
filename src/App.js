import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'
import Books from './components/Book'
import Shelfs from './components/Shelf'
import SearchBar from './components/Search'
import ChangingShelf from './components/ChangeShelf'


class BookApp extends React.Component {
	state = {
		bookTitles: []
	}

componentDidMount() {
	BooksAPI.getAll().then((book)=> {
		this.setState({bookTitles: book})
	})
}
		
	
	render() {
		 return (
                    <div className="list-books">
						<SearchBar />
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                                <Shelfs title='Currently Reading'/>
                                <Shelfs title='Want to Read' 
                                    content={<Books onChangeShelf={this.changeShelf} bookTitles = {this.state.bookTitles} />}
                                    />
                                <Shelfs title='Books Read'/>
                        </div>
                        <div className="open-search">           
                        </div>    
					</div>
        )
    }
}
		
		

export default BookApp
