import ChangeThemeButton from './ChangeThemeButton';
import Link from './Link';

const Header = () => {
  return (
    <header className='header'>
      <h1>Ihor Diiak</h1>
      <ul className='header__logo'>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
        <li>
          <Link href="/contacts">Contact</Link>
        </li>
      </ul>
      <ChangeThemeButton />
    </header>
  );
};

export default Header; 