import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { appendData } from "../actions/action";

class Library extends React.Component {
  componentDidMount() {
    let name = "Divi";
    let arr = [];

    arr.push({
      book_id: 1,
      title: "Dune",
      author: "Frank Herbert",
      year: 1965,
    });

    arr.push({
      book_id: 2,
      title: "Hyperion",
      author: "Dan Simmons",
      year: 1989,
    });

    this.props.appendData({
      name: name,
      books: [...this.props.books, ...arr],
    });
  }

  render() {
    const { name, books } = this.props;

    let bookList =
      books.length > 0 &&
      books.map((book, index) => {
        return (
          <li key={index} value={book.book_id}>
            {book.title}
          </li>
        );
      },this);

    return (
        <div>
        <h1>Hello {name}!</h1>
        <ol>
            { bookList }
        </ol>
    </div>
    );
  }
}

const mapDispatchToProps = {
    appendData
}

const mapStateToProps = state =>(
 {
     name: state.name,
     books : state.books

})
export default connect(mapDispatchToProps,mapStateToProps)(Library);
