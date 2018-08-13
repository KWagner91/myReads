// Tutorial from https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import ChangingShelf from './ChangeShelf'
import { Link } from 'react-router-dom'



class SearchBar extends Component {
	// Prop Types
    static propTypes = {
		query: PropTypes.string.isRequired,
		handleInputChange: PropTypes.func.isRequired  
};

	state = {
		query: '',
		results: []
  }



  getBooks = (e) => {
    const input = e.target.value.trim()
    this.setState({ query: input })

    // User Input
    if (input) {
      BooksAPI.search(input).then((books) => {
        books.length > 0 ?  this.setState({results: books }) : this.setState({ results: []})
      })

    // No Input
  } else 
  this.setState({results: []})
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
						<Book
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



 
