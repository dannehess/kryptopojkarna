import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Icon from '../Icon/Icon';
import './Header.scss';

const Header = () => {

const instagram = {
  icon: 'fab fa-instagram',
  url: 'https://www.instagram.com/kryptopojkarna/'
}

  return (
    <header>
      <Logo name="Kryptopojkarna"/>
      <Nav />
      <Icon icon={instagram.icon} url={instagram.url} className="instagram" />
    </header>
  )
}

export default Header;