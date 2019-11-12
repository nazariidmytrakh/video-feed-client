import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ReactComponent as BurgerIcon } from '../../../../icons/burger-icon.svg';

import style from './style.module.scss';

const NavMenu = ({ className, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => isMenuOpen && setMenuOpen(false);

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  const getDropDownMenuClassName = () => classnames(style.dropDownMenu, {
    [style.dropDownMenuIsOpen]: isMenuOpen,
  }, className);

  const handleBurgerClick = () => setMenuOpen(!isMenuOpen);

  return (
    <div className={style.navMenuWrapper}>
      <button className={style.burgerButton} onClick={handleBurgerClick}>
        <BurgerIcon />
      </button>
      <div className={getDropDownMenuClassName()}>
        <nav className={style.navMenu}>
          {children}
        </nav>
        <div className={style.avatar}>
          <img src="/avatar-pic.png" alt="User avatar" />
        </div>
      </div>
    </div>
  );
};

NavMenu.defaultProps = {
  className: '',
};

NavMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType(
    [PropTypes.array, PropTypes.element],
  ).isRequired,
};

export default NavMenu;
