import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'
import Books from './components/Book'
import Shelfs from './components/Shelf'
import SearchBar from './components/Search'
import ChangingShelf from './components/ChangeShelf'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BookApp extends React.Component {
	state = {
		books: []
	}

componentDidMount() {
	BooksAPI.getAll().then((book)=> {
		this.setState({books: book})
	})
}

getShelfBooks(shelfName){
        return this.state.books.filter((b) => b.shelf === shelfName)
    }

// Change Shelf and append book to new Shelf
    changeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            book.shelf = newShelf;

            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([ book ])
            }));
        });
};

 onUpdateBooks = (book, updatedShelf) => {
    BooksAPI.update(book, updatedShelf).then(() => {
          book.shelf = updatedShelf
          this.setState(prevState => ({
            books: prevState.books.filter((b) => b.id !== book.id).concat([book])
          }))
    })
  }

	
	render() {
		 return (
			<div className="app">
                 <Route path="/search" render={( { history }) => (
					  <SearchBar />
					)} />

				<Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Shelfs
                                    title="Currently Reading"
                                    books={this.getShelfBooks("currentlyReading")}
                                    changeShelf={this.changeShelf}
                                />
                                <Shelfs
                                    title="Want to Read"
                                    books={this.getShelfBooks("wantToRead")}
                                    changeShelf={this.changeShelf}
                                />
                                <Shelfs
                                    title="Read"
                                    books={this.getShelfBooks("read")}
                                    changeShelf={this.changeShelf}
                                />
                            </div>
                        </div>
                        </div>
                        )} />
			</div>
    )
  }
}
		
		

export default BookApp
