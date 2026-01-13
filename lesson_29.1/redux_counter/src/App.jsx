
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonIncrement from './components/ButtonIncrement';
import ButtonDecrement from './components/ButtonDecrement';

const App = () => {  
  return (
    <Provider store={store}>
      <Header />
      <ButtonIncrement />
      <ButtonDecrement />
      <Footer />
    </Provider>
  );
};

export default App;
