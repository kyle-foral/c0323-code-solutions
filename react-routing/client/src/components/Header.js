import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* TODO: Make these links to About and Catalog, with className "title" */}
            <li className="title">
              <Link to="/About"> About </Link>
            </li>
            <li className="title">
              <Link to="/"> Catalog </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
