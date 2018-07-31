import React, {Component} from 'react'
import ReactDom from 'react-dom'

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

export default Books
