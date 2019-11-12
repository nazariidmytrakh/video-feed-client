import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const FacebookVideoModal = ({ videoId }) => (
  <div className={style.videoWrapper}>
    <iframe title="facebook-video" src={`https://www.facebook.com/video/embed?video_id=${videoId}`} frameBorder="0" />
  </div>
);

FacebookVideoModal.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default FacebookVideoModal;
