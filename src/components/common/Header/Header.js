import React from 'react';

import { ReactComponent as Logo } from '../../../icons/logo-icon.svg';
import NavMenu from './NavMenu/NavMenu';

import style from './style.module.scss';

const Header = () => (
  <header className={style.header}>
    <Logo />
    <NavMenu>
      <a href="/">Explore</a>
      <a href="/">Subscriptions</a>
      <a href="/">Channels</a>
    </NavMenu>
  </header>
);

export default Header;
