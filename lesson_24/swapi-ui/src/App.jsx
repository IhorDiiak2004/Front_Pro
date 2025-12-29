import { useState } from 'react';
import RequestForm from './components/RequestForm';
import ResponseBlock from './components/ResponseBlock';

function App() {
  const [result, setResult] = useState('');

  const handleRequest = (endpoint) => {
    setResult(`You requested: https://swapi.dev/api/${endpoint}`);
  };

  return (
    <div className="container py-4 text-light">
      <h4 className="mb-3">SWAPI Interface</h4>

      <RequestForm onRequest={handleRequest} />
      <ResponseBlock data={result} />
    </div>
  );
}

export default App;



