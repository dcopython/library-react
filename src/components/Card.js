import React, { Component } from "react";

import "../App.css";

export class Card extends Component {
  render() {
    const { id, title, author, pages, readStatus } = this.props.book;
    return (
      <div className="card">
        <h1>Title: {title}</h1>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p>Status: {readStatus}</p>
        <div className="btnContainer">
          <button
            className="far fa-check-square"
            onClick={this.props.changeRead.bind(this, id)}
          ></button>
          <button
            className="far fa-trash-alt"
            onClick={this.props.delBtn.bind(this, id)}
          ></button>
        </div>
      </div>
    );
  }
}

export default Card;
