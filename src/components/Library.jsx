import React from "react";
import appendData from "../actions/action";



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



   appendData({
        name: name,
        books : [...this.props.books,...arr]
    })
  }




  render(){

    const {name,books} = this.props;

    let bookList = books.length > 0 && 
    books.map((item,i)=>{
        return (<li key={i}>{item}</li>);
    })

    return(
        <div>

      <h3>Name: <span>{name}</span></h3>
        <ul>{bookList}</ul>
        </div>
    )
      
  }
}

export default Library;
