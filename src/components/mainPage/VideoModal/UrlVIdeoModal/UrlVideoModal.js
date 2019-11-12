import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const UrlVideoModal = ({ url }) => (
  <div className={style.videoWrapper}>
    <video controls>
      <source src={url} />
    </video>
  </div>
);

UrlVideoModal.propTypes = {
  url: PropTypes.string.isRequired,
};

export default UrlVideoModal;
