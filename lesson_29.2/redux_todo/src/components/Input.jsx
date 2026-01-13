import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const Input = ({ label, validate, ...props }) => {
  const [field, meta] = useField({ ...props, validate });

  return (
    <TextField
      {...field}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default Input;

