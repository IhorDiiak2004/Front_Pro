import { useDispatch, useSelector } from 'react-redux';
import RequestForm from './RequestForm';
import ResponseBlock from './ResponseBlock';
import { fetchSwapiData, clearData } from '../redux/slices/swapiSlice';

const SwapiPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  const handleRequest = (endpoint) => {
    dispatch(fetchSwapiData(endpoint));
  };

  return (
    <div className="container py-4">
      <h4 className="mb-3">SWAPI Interface</h4>

      <RequestForm onRequest={handleRequest} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ResponseBlock data={data} />

      <button
        className="btn btn-danger mt-3"
        onClick={() => dispatch(clearData())}
      >
        Clear
      </button>
    </div>
  );
};

export default SwapiPage;

