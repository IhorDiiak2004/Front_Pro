import SmileItem from "./SmileItem";

function SmileList({ smiles, vote }) {
  return (
    <div className="d-flex justify-content-center gap-4 my-4">
      {Object.entries(smiles).map(([key, value]) => (
        <SmileItem
          key={key}
          name={key}
          count={value}
          onVote={() => vote(key)}
        />
      ))}
    </div>
  );
}

export default SmileList;
