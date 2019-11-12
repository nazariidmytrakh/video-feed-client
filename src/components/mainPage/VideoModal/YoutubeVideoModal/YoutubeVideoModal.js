import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const YoutubeVideoModal = ({ videoId }) => (
  <div className={style.videoWrapper}>
    <iframe title="youtubeVideo" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
  </div>
);

YoutubeVideoModal.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubeVideoModal;
