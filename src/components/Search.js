// Tutorial from https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Books from "./Book";
import ChangingShelf from './ChangeShelf'
import { Link } from 'react-router-dom'



class SearchBar extends Component {
	// Prop Types
    static propTypes = {
		query: PropTypes.string.isRequired,
		results: PropTypes.array.isRequired,
		getBooks: PropTypes.func.isRequired  
};

	state = {
		query: '',
		results: []
  }


getBooks = (event) => {
    var value = event.target.value
    this.setState(() => {
      return {query: value}
    })
    this.search_books(value)
}


 search_books = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query, 10).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks))
          this.setState(() => {
            return {results: books}
          })
        }
      })
    } else {
      this.setState({results: [], query: ''})
    }
}


	render() {
		return (
		<div className="search-books">
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                input= {this.state.query}
				onChange={this.getBooks}
			   />
			   </div>
			</div>	   
			  <div className="search-books-results">
				{ this.state.results.length > 0 && (
				  <div>
					<div className=''>
					  <h3>Search returned { this.state.results.length } books </h3>
					</div>
					<ol className="books-grid">
					  {this.state.results.map((book) => (
						<Books
						  book={ book }
						  books={ this.props.books }
						  key={ book.id }
						  changeShelf={ this.props.changeShelf }
						/>
		

						 ))}
					</ol>
				  </div>
)}
          </div>
		</div>  
		)}
}



export default SearchBar



 
