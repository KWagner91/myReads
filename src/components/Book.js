import React from 'react'
import ReactDom from 'react-dom'

const books = [
{name: 'book1'},
{name: 'book2'},
{name: 'book3'}
]

const element = React.createElement('div', null, books)

ReactDom.render(element, document.getElementById('root')
