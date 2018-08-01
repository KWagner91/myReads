import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

class Books extends Component {
	render() {
		return (
		<ol className="book-list">
		{this.props.bookTitles.map((book) => (
			<li key={book.id} className=".list-books-title">
			<div className='book-cover' style={{
              backgroundImage: `url(${book.cover})`,
            }}/>
			<div className='list-books-content'>
              <p>{book.title}</p>
              <p>{book.authors}</p>
              <button onClick={() => this.props.onChangeShelf(book)}>Change Shelf</button>
            </div>
            <button className='open-search'>
              Search
            </button>
			
			</li>
			))}
		</ol>
		)
		}
}

// Prop types
	Books.propTypes = {
	bookTitles: PropTypes.array.isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default Books
