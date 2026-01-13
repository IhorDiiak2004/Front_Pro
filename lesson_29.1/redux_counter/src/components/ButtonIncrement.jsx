import { useDispatch } from 'react-redux';
import { counter } from '../redux/slices/counterSlice';

const ButtonIncrement = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(counter.actions.incrementByAmount(10));
  }

  return <button onClick={handleClick}>Increment</button>;
};

export default ButtonIncrement;