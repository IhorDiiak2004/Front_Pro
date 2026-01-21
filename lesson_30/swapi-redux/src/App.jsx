import { Provider } from 'react-redux';
import { store } from './redux/store';
import SwapiPage from './components/SwapiPage';

const App = () => {
  return (
    <Provider store={store}>
      <SwapiPage />
    </Provider>
  );
};

export default App;


