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
		return (
		<div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <ChangingShelf
                        book={book}
                        changeShelf={this.props.changeShelf}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors}</div>
		</div>
		)
		}
}


export default Books
