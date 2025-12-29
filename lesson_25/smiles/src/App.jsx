import React, { Component } from "react";
import SmileList from "./components/SmileList";
import Results from "./components/Results";

class App extends Component {
  state = {
    smiles: {
      smile1: 0,
      smile2: 0,
      smile3: 0,
      smile4: 0,
    },
    winner: null,
  };

  componentDidMount() {
    const saved = localStorage.getItem("smiles");
    if (saved) {
      this.setState({ smiles: JSON.parse(saved) });
    }
  }

  vote = (key) => {
    this.setState(
      (prev) => ({
        smiles: {
          ...prev.smiles,
          [key]: prev.smiles[key] + 1,
        },
      }),
      () => localStorage.setItem("smiles", JSON.stringify(this.state.smiles))
    );
  };

  showResults = () => {
    const winner = Object.keys(this.state.smiles).reduce((a, b) =>
      this.state.smiles[a] > this.state.smiles[b] ? a : b
    );
    this.setState({ winner });
  };

  clearResults = () => {
    const empty = {
      smile1: 0,
      smile2: 0,
      smile3: 0,
      smile4: 0,
    };
    localStorage.removeItem("smiles");
    this.setState({ smiles: empty, winner: null });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        <h2>Голосування за смайлики</h2>

        <SmileList smiles={this.state.smiles} vote={this.vote} />

        <button className="btn btn-success m-2" onClick={this.showResults}>
          Show Results
        </button>

        <button className="btn btn-danger m-2" onClick={this.clearResults}>
          Очистити результати
        </button>

        <Results winner={this.state.winner} smiles={this.state.smiles} />
      </div>
    );
  }
}

export default App;


