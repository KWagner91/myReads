import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'


class BookList extends React.Component {
	render() {
		const books = [
		{name: 'book1'},
		{name: 'book2'},
		{name: 'book3'}
		]

    return <ol>
    { books.map (book => (
		<li key= {book.name}>{book.name}</li>
		
    ))}
    </ol>
  }
}

class App extends Component {
	render() {
		return (
		<div className="app">
		<BookList />
		<BookList />
		<BookList />
		</div>
		);
	}
}

export default App
