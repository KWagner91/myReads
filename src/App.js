import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'
import Books from './components/Book'


class BookApp extends React.Component {
	state = {
		bookTitles: [
  {
    "id": "Ender's Game",
    "title": "Ender's Game",
    "authors": "Orson Scott Card",
    "cover": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
  },
  {
    "id": "Harry Potter and the Sorcerer's Stone",
    "title": "Harry Potter and the Sorcerer's Stone",
    "authors": "J.K. Rowling",
    "cover": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
  }
]
		}
		

	changeShelf = (book) => {
		this.setState((state) => ({
			bookTitles: state.bookTitles.filter((b) => b.id !== book.id)
			}))
		}
		
	
	render() {
		 return (
            <div className="app">
                
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div
                                    className="bookshelf"> Currently Reading </div>
                                <div
                                    className="bookshelf"> <Books onChangeShelf={this.changeShelf} bookTitles = {this.state.bookTitles} />
                                    </div>
                                <div
                                    className="bookshelf"> Read Books
                                    </div>
                            </div>
                        </div>
                        <div className="open-search">
                        </div>
                        
                    </div>
            </div>
        )
    }
}
		
		

export default BookApp
