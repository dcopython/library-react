import React, { Component } from "react";
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
import AddForm from "./components/AddForm.js";

import "./App.css";

class App extends Component {
  state = {
    books: JSON.parse(localStorage.getItem("books")) || [],
  };

  delBtn = (id) => {
    const books = [...this.state.books.filter((book) => book.id !== id)];

    this.setState({
      books,
    });

    localStorage.setItem("books", JSON.stringify(books));
  };

  addBook = (book) => {
    const books = [...this.state.books, book];

    this.setState({
      books,
    });

    localStorage.setItem("books", JSON.stringify(books));
  };

  changeRead = (id) => {
    const books = [...this.state.books];

    const book = books.find((book) => book.id === id);

    book.readStatus === "Read"
      ? (book.readStatus = "Unread")
      : (book.readStatus = "Read");

    this.setState({
      books,
    });

    localStorage.setItem("books", JSON.stringify(books));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Cards
          books={this.state.books}
          delBtn={this.delBtn}
          changeRead={this.changeRead}
        />
        <AddForm addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
