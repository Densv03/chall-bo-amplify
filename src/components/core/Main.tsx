import { Sidenav } from './Sidenav';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <div className="main d-flex">
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="main-wrapper-page">
        <Outlet />
      </div>
    </div>
  );
};
