import Link from './Link';

const Footer = () => (
  <footer className='footer'>
    <h1>Ihor Diiak</h1>
    <ul>
      <li>
        Phone number: <Link href='tel: +380957277341'>+380957277341</Link>
      </li>
      <li>
        Email: <Link href='mailto: someone@gmail.com'>someone@gmail.com</Link>
      </li>
      <li>
        Git: <Link href='https://github.com/IhorDiiak2004/Front_Pro'>https://github.com/IhorDiiak2004/Front_Pro</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;