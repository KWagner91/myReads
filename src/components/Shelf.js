import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from "prop-types";
import Book from "./Book";

class Shelfs extends Component {
	// Prop types
 static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
};

	render() {
		return (
		 <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                                {this.props.content}
                    </ol>
                </div>
</div>
		)
		}
}



export default Shelfs
