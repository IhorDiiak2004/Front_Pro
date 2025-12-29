const emojis = {
  smile1: "😀",
  smile2: "😎",
  smile3: "😍",
  smile4: "🤯",
};

function Results({ winner, smiles }) {
  if (!winner) return null;

  return (
    <div className="mt-4">
      <h4>Переможець:</h4>
      <div style={{ fontSize: "50px" }}>
        {emojis[winner]}
      </div>
      <p>Голосів: {smiles[winner]}</p>
    </div>
  );
}

export default Results;
