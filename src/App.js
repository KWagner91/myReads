import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'
import Books from './components/Book'
import Shelfs from './components/Shelf'
import SearchBar from './components/Search'


class BookApp extends React.Component {
	state = {
		bookTitles: []
	}

componentDidMount() {
	BooksAPI.getAll().then((book)=> {
		this.setState({bookTitles: book})
	})
}
		

//User clicks button to change book shelves
	changeShelf = (book) => {
		this.setState((state) => ({
			bookTitles: state.bookTitles.filter((b) => b.id !== book.id)
			}))
		}
		
	
	render() {
		 return (
            <div className="app">
                <SearchBar />
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                 <Shelfs title='Currently Reading'/>
                                <Shelfs title='Want to Read' 
                                    content={<Books onChangeShelf={this.changeShelf} bookTitles = {this.state.bookTitles} />}
                                    />
                                <Shelfs title='Books Read'/>
                            </div>
                        </div>
                        <div className="open-search">
                        </div>
                        
                    </div>
            </div>
        )
    }
}
		
		

export default BookApp
