import React from 'react';
import { Link } from "react-router-dom";
import './Logo.scss';

const Logo = (props) => {
  return (
    <>
    <Link to="/"><span className="logo">{props.name}</span></Link>
    <Link to="/"><span className="mob-logo">KP</span></Link>
    </>
  )
}

export default Logo;