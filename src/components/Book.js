import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import ChangingShelf from './ChangeShelf'

class Books extends Component {
	render() {
		return (
		<ol className="books-grid">
				{this.props.bookTitles.map((book) => (
			<div className="book" id={book.id}>
				<div className="book-top">
					<div className='book-cover' style={{
					backgroundImage:`url(${book.imageLinks.thumbnail})`  
					}}/>
					<ChangingShelf />
				</div>
					<div className='list-books-content'>
					  <p className='book-title'>{book.title}</p>
					  <p className='book-authors'>{book.authors}</p>
					  
					</div>
					
				
			</div>
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
