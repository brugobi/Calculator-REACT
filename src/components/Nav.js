import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand font-orange font20px ZenDotsFont">Math Magicians</div>
        </div>
      </div>

      <div className="navbar-end font-orange ZenDotsFont">
        <div className="navbar-item">
          <Link to="/" className="nav-link font-orange">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/calculator" className="nav-link font-orange">Calculator</Link>
        </div>
        <div className="navbar-item">
          <Link to="/quote" className="nav-link font-orange">Quote</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
