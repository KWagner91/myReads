import React, {Component} from 'react'
import ReactDom from 'react-dom'

class Books extends Component {
	render() {
		return (
		<ol className="book-list">
		{this.props.bookTitles.map((book) => (
			<li key={book.id}>
			{book.title}
			</li>
			))}
		</ol>
		)
		}
}

export default Books
