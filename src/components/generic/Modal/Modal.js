import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CloseIcon } from '../../../icons/close-icon.svg';

import style from './style.module.scss';

const Modal = ({ children, onClose }) => {
  const handleOverlayClick = ({ target }) => (
    target.classList.contains(style.modalOverlay) && onClose()
  );

  return (
    <div onClick={handleOverlayClick} className={style.modalOverlay}>
      <button onClick={onClose} type="button" className={style.closeButton}>
        <CloseIcon />
      </button>
      <div className={style.modalBody}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default Modal;
