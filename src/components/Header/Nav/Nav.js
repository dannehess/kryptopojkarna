import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
      <i className="fas fa-home navicon"></i>
      Start
        </Link>
      <Link to="/episodes">
      <i className="far fa-folder navicon"></i>
        Avsnitt
        </Link>
      <Link to="/about">
      <i className="fas fa-user-friends navicon"></i>
        Om oss
        </Link>
    </nav>
  )
}

export default Nav;