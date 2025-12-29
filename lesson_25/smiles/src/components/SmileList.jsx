import React, { Component } from "react";
import SmileItem from "./SmileItem";

class SmileList extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center gap-4 my-4">
        {Object.entries(this.props.smiles).map(([key, value]) => (
          <SmileItem
            key={key}
            name={key}
            count={value}
            onVote={() => this.props.vote(key)}
          />
        ))}
      </div>
    );
  }
}

export default SmileList;


