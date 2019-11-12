import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

import style from './style.module.scss';

const MainLayout = ({ children }) => (
  <div className={style.mainLayout}>
    <Header />
    <div className={style.content}>
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
