import { Form } from 'formik';
import Button from '@mui/material/Button';
import Input from './Input';
import { required, minLength } from '../helpers/validators';

const composeValidators = (...validators) => (value) =>
  validators.reduce(
    (error, validator) => error || validator(value),
    undefined
  );

const TodoForm = () => {
  return (
    <Form>
      <Input
        name="name"
        label="Name"
        validate={composeValidators(
          required,
          minLength(5)
        )}
      />

      <Button
        variant="outlined"
        type="submit"
        style={{ height: '56px', marginLeft: '10px' }}
      >
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;


