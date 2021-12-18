import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { House, BarChartLineFill } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";

import './Sidebar.css';

function SideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto nav-link">
        <span className="fs-4">Booking</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Nav.Link as={NavLink} to="/" className={isActive => "nav-link" + (isActive ? "active" : "")}>
            <House /> Home
          </Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link as={NavLink} to="/rooms" className={isActive => "nav-link" + (isActive ? " active" : "")}>
            <BarChartLineFill /> Rooms
          </Nav.Link>
        </li>
      </ul>
      <hr />
      <NavDropdown title="User" menuVariant="dark">
        <NavDropdown.Item href='#signout'>Sign Out</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default SideBar;
