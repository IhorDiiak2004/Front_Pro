const ResponseBlock = ({ data }) => {
  return (
    <>
      <h5 className="mt-4">Result:</h5>

      <pre className="result-box">
        {data ? JSON.stringify(data, null, 2) : 'No data yet'}
      </pre>
    </>
  );
};

export default ResponseBlock;

