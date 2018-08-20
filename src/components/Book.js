import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import ChangingShelf from './ChangeShelf'

class Books extends Component {
	// Prop Types
	static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
};

	render() {
		const {book} = this.props;
		const noCover = "http://via.placeholder.com/128x193?text=No%20Cover";
		const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
		const title = book.title ? book.title : "No title available"
		
		return (
		<div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" 
                    style={{backgroundImage: `url("${coverImg})` }}>
				</div>
                    <ChangingShelf
                        book={book}
                        changeShelf={this.props.changeShelf}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
		</div>
		)
		}
}


export default Books
