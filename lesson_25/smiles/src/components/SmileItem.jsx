import React, { Component } from "react";

const emojis = {
  smile1: "😀",
  smile2: "😎",
  smile3: "😍",
  smile4: "🤯",
};

class SmileItem extends Component {
  render() {
    return (
      <div onClick={this.props.onVote} style={{ cursor: "pointer" }}>
        <div style={{ fontSize: "40px" }}>
          {emojis[this.props.name]}
        </div>
        <div>{this.props.count}</div>
      </div>
    );
  }
}

export default SmileItem;

