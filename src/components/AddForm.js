import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "../App.css";

export class AddForm extends Component {
  state = {
    book: {
      id: uuidv4(),
      title: "",
      author: "",
      pages: "",
      readStatus: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(this.state.book);
    this.setState({
      book: {
        id: uuidv4(),
        title: "",
        author: "",
        pages: "",
        readStatus: "",
      },
    });
  };

  onChange = (e) =>
    this.setState({
      book: { ...this.state.book, [e.target.name]: e.target.value },
    });

  render() {
    return (
      <div className="formContainer">
        <form className="form" onSubmit={this.onSubmit}>
          <p>Add A New Book:</p>
          <input
            type="text"
            placeholder="Title..."
            value={this.state.book.title}
            onChange={this.onChange}
            name="title"
          />
          <input
            type="text"
            placeholder="Author..."
            value={this.state.book.author}
            onChange={this.onChange}
            name="author"
          />
          <input
            type="number"
            placeholder="# of Pages..."
            value={this.state.book.pages}
            onChange={this.onChange}
            name="pages"
          />
          <div className="formRadio">
            <label htmlFor="read">
              <input
                type="radio"
                value="Read"
                id="read"
                name="readStatus"
                onChange={this.onChange}
              />
              Read
            </label>
            <label htmlFor="unread">
              <input
                type="radio"
                value="Unread"
                id="unread"
                name="readStatus"
                onChange={this.onChange}
              />
              Unread
            </label>
          </div>
          <div className="formbtn">
            <button
              className="far fas fa-plus-circle"
              type="submit"
              value="Submit"
            ></button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
