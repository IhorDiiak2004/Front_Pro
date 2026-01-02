import { useState } from 'react';
import { Formik } from 'formik';
import TodoForm from './components/TodoForm';
import ItemsList from './components/ItemsList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.name]);
    resetForm();
  };

  return (
    <>
      <h1>Todo</h1>

      <Formik
        initialValues={{ name: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = 'Required';
          } else if (values.name.length < 5) {
            errors.name = 'Must be at least 5 characters';
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <TodoForm />
      </Formik>

      <ItemsList items={todos} />
    </>
  );
}

export default App;

