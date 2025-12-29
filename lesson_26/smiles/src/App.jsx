import { useEffect, useState } from "react";
import SmileList from "./components/SmileList";
import Results from "./components/Results";

function App() {
  const [smiles, setSmiles] = useState({
    smile1: 0,
    smile2: 0,
    smile3: 0,
    smile4: 0,
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("smiles");
    if (saved) {
      setSmiles(JSON.parse(saved));
    }
  }, []);

  const vote = (key) => {
    setSmiles((prevSmiles) => {
      const updated = {
        ...prevSmiles,
        [key]: prevSmiles[key] + 1,
      };

      localStorage.setItem("smiles", JSON.stringify(updated));
      return updated;
    });
  };

  const showResults = () => {
    const winnerKey = Object.keys(smiles).reduce((a, b) =>
      smiles[a] > smiles[b] ? a : b
    );
    setWinner(winnerKey);
  };

  const clearResults = () => {
    const empty = {
      smile1: 0,
      smile2: 0,
      smile3: 0,
      smile4: 0,
    };

    localStorage.removeItem("smiles");
    setSmiles(empty);
    setWinner(null);
  };

  return (
    <div className="container text-center mt-4">
      <h2>Голосування за смайлики</h2>

      <SmileList smiles={smiles} vote={vote} />

      <button className="btn btn-success m-2" onClick={showResults}>
        Show Results
      </button>

      <button className="btn btn-danger m-2" onClick={clearResults}>
        Очистити результати
      </button>

      <Results winner={winner} smiles={smiles} />
    </div>
  );
}

export default App;

