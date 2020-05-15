import React, { Component } from "react";
import Card from "./Card.js";
import "../App.css";

export class Cards extends Component {
  render() {
    const newBook = this.props.books.map((book) => (
      <Card
        key={book.id}
        book={book}
        delBtn={this.props.delBtn}
        changeRead={this.props.changeRead}
      />
    ));

    return <div className="cardContainer">{newBook}</div>;
  }
}

export default Cards;
