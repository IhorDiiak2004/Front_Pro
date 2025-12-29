import React, { Component } from "react";

const emojis = {
  smile1: "😀",
  smile2: "😎",
  smile3: "😍",
  smile4: "🤯",
};

class Results extends Component {
  render() {
    if (!this.props.winner) return null;

    return (
      <div className="mt-4">
        <h4>Переможець:</h4>
        <div style={{ fontSize: "50px" }}>
          {emojis[this.props.winner]}
        </div>
        <p>Голосів: {this.props.smiles[this.props.winner]}</p>
      </div>
    );
  }
}

export default Results;

