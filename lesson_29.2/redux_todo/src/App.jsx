import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Formik } from 'formik';
import TodoForm from './components/TodoForm';
import ItemsList from './components/ItemsList';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Todo</h1>

      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, { resetForm }) => {
          store.dispatch({
            type: 'todos/addItem',
            payload: values.name,
          });
          resetForm();
        }}
      >
        <TodoForm />
      </Formik>

      <ItemsList />
    </Provider>
  );
};

export default App;



