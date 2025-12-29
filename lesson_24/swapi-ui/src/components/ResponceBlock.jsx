function ResponseBlock({ data }) {
  return (
    <>
      <h5 className="mt-4">Result:</h5>

      <pre className="result-box">
        {data || 'No data yet'}
      </pre>
    </>
  );
}

export default ResponseBlock;
