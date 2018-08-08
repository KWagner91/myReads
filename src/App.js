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

  searchBook = (searchQuery) => {
    return BooksAPI.search(searchQuery,20)
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
                        <div className="open-search">
                            
                        </div>
                    </div>
				</div>
        )
    }
}
		
		

export default BookApp
