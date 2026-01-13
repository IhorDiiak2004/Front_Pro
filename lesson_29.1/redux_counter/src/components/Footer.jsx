import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const Footer = () => {
  const value = useSelector(selectors.counter.value);

  return <footer>Footer: {value}</footer>;
};

export default Footer;