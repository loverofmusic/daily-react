import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>;
  }

  handleClick() {
    console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
