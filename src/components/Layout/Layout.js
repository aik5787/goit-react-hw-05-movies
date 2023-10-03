import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <p>Layout</p>
      <Header />
      <Outlet />
    </>
  );
};
export default Layout;
