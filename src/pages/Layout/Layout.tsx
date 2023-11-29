import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};
