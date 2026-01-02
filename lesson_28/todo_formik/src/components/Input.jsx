import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

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


