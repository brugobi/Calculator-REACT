import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand">Math Magicians</div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/calculator">Calculator</Link>
        </div>
        <div className="navbar-item">
          <Link to="/quote">Quote</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
