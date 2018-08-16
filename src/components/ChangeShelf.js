import React, { Component } from "react";
import ReactDom from 'react-dom'
import PropTypes from "prop-types";
import Books from "./Book";


class ChangingShelf extends Component{
    // Prop Types
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    };

	
    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
        currentShelf: event.target.value
    };
    



    render(){
		let currentShelf = this.props.book.shelf
        return(
            <div className="book-shelf-changer">
                 <select
                    value={this.currentShelf}
                    onChange={this.changeShelf}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ChangingShelf;
