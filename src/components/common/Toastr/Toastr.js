import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.module.scss';

const RED = 'RED';
const GREEN = 'GREEN';

const Toastr = ({ onClose, header, text, type }) => {
  const getClassName = () => classnames(style.toastr, {
    [style.toastrRed]: type === RED,
    [style.toastrGreen]: type === GREEN,
  });

  return (
    <div onClick={onClose} className={getClassName()}>
      <strong>{header}</strong>: {text}
    </div>
  );
};

Toastr.RED = RED;
Toastr.GREEN = GREEN;

Toastr.defaultProps = {
  type: GREEN,
};

Toastr.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf([RED, GREEN]),
};

export default Toastr;
