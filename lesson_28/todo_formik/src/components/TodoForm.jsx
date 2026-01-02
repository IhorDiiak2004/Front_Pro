import { Form } from 'formik';
import Button from '@mui/material/Button';
import Input from './Input';

const TodoForm = () => {
  return (
    <Form>
      <Input name="name" label="Name" />

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





