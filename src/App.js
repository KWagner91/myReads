import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'
import Books from './components/Book'
import Shelf from './components/Shelf'
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
		book.shelf = newShelf
        BooksAPI.update(book, newShelf).then(() => {
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([ book ])
            }));
        });
};



	
	render() {
		 return (
			<div className="app">
                 <Route path="/search" render={( { history }) => (
					  <SearchBar
						books={ this.state.books }
						changeShelf={ this.changeShelf }
					/>
					)} />

				<Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Shelf
                                    title="Currently Reading"
                                    books={this.getShelfBooks("currentlyReading")}
                                    changeShelf={this.changeShelf}
                                />
                                <Shelf
                                    title="Want to Read"
                                    books={this.getShelfBooks("wantToRead")}
                                    changeShelf={this.changeShelf}
                                />
                                <Shelf
                                    title="Read"
                                    books={this.getShelfBooks("read")}
                                    changeShelf={this.changeShelf}
                                />
                            </div>
                            <div className="open-search">
								<Link to="/search">Search</Link>
							</div>
                        </div>
                        </div>
                        )} />
			</div>
    )
  }
}
		
		

export default BookApp
