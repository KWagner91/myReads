import React, { Component } from "react";
import PropTypes from "prop-types";



class ChangingShelf extends Component{
    // Prop Types
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    };
    


	
    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
    };
    



    render(){
		const { book } = this.props
		
        return(
            <div className="book-shelf-changer">
                 <select
                    value={book.shelf}
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
