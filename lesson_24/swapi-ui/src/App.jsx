import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container py-4 text-light">
      <h4 className="mb-3">SWAPI Interface</h4>

      <div className="input-group mb-2">
        <span className="input-group-text">
          https://swapi.dev/api/
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="people/1/"
        />

        <button className="btn btn-secondary">
          Request
        </button>
      </div>

      <small className="text-muted">
        Need a hint? try people/1 or planets/3 or starships/9
      </small>

      <h5 className="mt-4">Result:</h5>

      <pre className="result-box">
{`{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male"
}`}
      </pre>
    </div>
  );
}

export default App;


