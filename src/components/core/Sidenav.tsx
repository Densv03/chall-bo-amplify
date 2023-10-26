import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/Auth/auth.service';

export const Sidenav = () => {
  const location = useLocation();
  function getLinkClassName(path: string, fullMatch: boolean = true): string {
    if (location.pathname === path && fullMatch) {
      return 'sidenav-link sidenav-link--active';
    } else if (!fullMatch && location.pathname.includes(path)) {
      return 'sidenav-link sidenav-link--active';
    }
    return 'sidenav-link';
  }

  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to="/users/list">
          <span className={getLinkClassName('/users/list')}>Users</span>
        </Link>
      </li>
      <li>
        <Link to="/organizations">
          <span className={getLinkClassName('organizations', false)}>
            Organizations
          </span>
        </Link>
        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <Link to="/organizations/create">*/}
        {/*      <span className={getLinkClassName('/organizations/create')}>*/}
        {/*        Create*/}
        {/*      </span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/organizations/delete">*/}
        {/*      <span className={getLinkClassName('/organizations/delete')}>*/}
        {/*        Delete*/}
        {/*      </span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </li>
      <li>
        <Link to="/reports">
          <span className={getLinkClassName('/reports')}>Reports</span>
        </Link>
      </li>
      <li
        onClick={() => {
          AuthService.logout();
          navigate('/login');
        }}>
        <span className="sidenav-link">Log out</span>
      </li>
    </ul>
  );
};
