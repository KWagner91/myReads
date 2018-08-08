// Tutorial from https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import Suggestions from "./Suggestion"



class SearchBar extends Component {
	// Prop Types
    static propTypes = {
		query: PropTypes.string.isRequired,
		handleInputChange: PropTypes.func.isRequired  
};

  getInfo = () => {
    BooksAPI.getAll().then((book)=> {
		this.setState({results: book})
        })
  }


	state = {
		query: '',
		results: []
  }


handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }



	render() {
		return (
     
		<div className="search-books">
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                ref={input => this.search = input}
				onChange={this.handleInputChange}
			   />
			   <Suggestions results={this.state.results} />
					
								 
            </div>
          </div>
          <div className="search-books-results">
           
              </div>
		</div>
        
		)}
}



export default SearchBar



 
