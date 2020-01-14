import React, { Component, Fragment } from "react";
import "./style.css"

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["555", "fff"]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* 下面是一个input */}
        {
          // 单行注释这么写
        }
        <div>
          <input className="input" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>

        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li 
                key={index} 
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}
              >
                {/* {item} */}
              </li>
            );
          })}
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

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
  }

  handleItemDelete(index) {
    console.log(index);
    //immutable => state 不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
