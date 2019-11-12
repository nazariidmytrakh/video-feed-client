import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import validator from 'validator';

import Modal from '../../generic/Modal/Modal';

import style from './style.module.scss';

const EmailModal = ({ onClose, onSubmit }) => {
  const [emailValue, setEmailValue] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);

  const getButtonClassName = () => classnames(style.submitButton, {
    [style.submitButtonIsShown]: isEmailValid,
  });

  const handleEmailChange = ({ target: { value } }) => {
    const isValid = validator.isEmail(value);

    setEmailValue(value);
    setEmailValid(isValid);
  };
  const handleSubmit = () => onSubmit(emailValue);

  return (
    <Modal onClose={onClose}>
      <div className={style.emailModalBody}>
        <div className={style.text}>Please enter your email</div>
        <input className={style.emailInput} type="text" onChange={handleEmailChange} value={emailValue} />
        <div className={style.buttonRow}>
          <button
            className={getButtonClassName()}
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

EmailModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EmailModal;
