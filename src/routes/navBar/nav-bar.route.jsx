import { Fragment } from "react";
import "./nav-bar.style.css";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <Fragment>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/home">logo</Link>
        </div>
        <div className="nav-links">
          <span>placeholder</span>
          <span>placeholder</span>
          <span>placeholder</span>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default NavBar;
