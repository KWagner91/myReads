import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDom from 'react-dom'
import Books from './components/Book'

const bookTitles = [
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


class BookApp extends React.Component {
	render() {
		
    return (
    <div>
    <Books bookTitles = {bookTitles}/>
    </div>
   )
  }
}



export default BookApp
