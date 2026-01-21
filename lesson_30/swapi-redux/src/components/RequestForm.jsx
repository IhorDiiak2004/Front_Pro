import { useState } from 'react';

const RequestForm = ({ onRequest }) => {
  const [endpoint, setEndpoint] = useState('');

  const handleSubmit = () => {
    if (!endpoint.trim()) return;
    onRequest(endpoint.trim());
  };

  return (
    <>
      <div className="input-group mb-2">
        <span className="input-group-text">
          https://swapi.dev/api/
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="people/1"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />

        <button className="btn btn-secondary" onClick={handleSubmit}>
          Request
        </button>
      </div>

      <small className="text-muted">
        Need a hint? try people/1 or planets/3 or starships/9
      </small>
    </>
  );
};

export default RequestForm;

