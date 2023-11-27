import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type THeaderProps = object;

export const Header: FC<THeaderProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="rate-change">Changed rates</NavLink>
        </li>
        <li>
          <NavLink to="rate-search">Search rate</NavLink>
        </li>
      </ul>
    </nav>
  );
};
