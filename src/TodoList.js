import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick="">提交</button>
        <ul>
          <li>learn react</li>
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }
}
