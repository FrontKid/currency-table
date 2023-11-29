import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Header: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="rate-change">Changed rates</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="rate-search">Search rate</NavLink>
        </li>
      </ul>
    </nav>
  );
};
