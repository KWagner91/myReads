import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from "prop-types";
import Book from "./Book";

class Shelfs extends Component {
	// Prop types
 static propTypes = {
        books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
};

	render() {
		return (
		 <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id} className="contact-list-item">
                                <Book
                                    book={book}
                                    changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
		</div>
		)
		}
}



export default Shelfs
