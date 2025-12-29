const emojis = {
  smile1: "😀",
  smile2: "😎",
  smile3: "😍",
  smile4: "🤯",
};

function SmileItem({ name, count, onVote }) {
  return (
    <div onClick={onVote} style={{ cursor: "pointer" }}>
      <div style={{ fontSize: "40px" }}>
        {emojis[name]}
      </div>
      <div>{count}</div>
    </div>
  );
}

export default SmileItem;
