import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HomeNavigation = () => {
  const [color, setColor] = useState(false);
  const classes = color ? 'Home-navigation' : 'Home-navigation__dark-background';
  

  return (
    <nav className={classes}>
      <ul className="Home-navigation__menu">
        <li className="Home-navigation__item" onClick={() => setColor(true)}><NavLink className="Home-navigation__item-link" to='/about'>About Us</NavLink></li>
        <li className="Home-navigation__item" onClick={() => setColor(true)}><NavLink className="Home-navigation__item-link" to='/endorsements'>Endorsements</NavLink></li>
        <li className="Home-navigation__item" onClick={() => setColor(true)}><NavLink className="Home-navigation__item-link" to='/system'>Our System</NavLink></li>
        <li className="Home-navigation__item" onClick={() => setColor(true)}><NavLink className="Home-navigation__item-link" to='/sign-in'>Sign In</NavLink></li>
      </ul>
    </nav>
  );
}

export default HomeNavigation;