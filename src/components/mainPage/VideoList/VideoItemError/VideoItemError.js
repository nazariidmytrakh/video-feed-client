import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ReactComponent as VideoErrorIcon } from '../../../../icons/video-error-icon.svg';

import style from './style.module.scss';

const VideoItemError = ({ className }) => {
  const getClassName = () => classnames(style.videoItemError, className);

  return (
    <div className={getClassName()}>
      <VideoErrorIcon />
      <p>Data is missing</p>
    </div>
  );
};

VideoItemError.defaultProps = {
  className: '',
};

VideoItemError.propTypes = {
  className: PropTypes.string,
};

export default VideoItemError;
