import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { videoIconMap } from '../../../../utils/constants';

import style from './style.module.scss';

const VideoItem = ({
  onClick,
  title,
  author,
  source,
  date,
  views,
  length,
  thumbnail,
  className,
}) => {
  const getClassName = () => classnames(style.videoItem, className);
  const SourceIcon = videoIconMap.getVideoIcon(source);

  return (
    <div onClick={onClick} className={getClassName()}>
      <div style={{ backgroundImage: `url(/play-button.png), url(${thumbnail})` }} className={style.thumbnail} />
      <div className={style.content}>
        <strong>{title}</strong>
        {author && <div>{author}</div>}
        <div>{date} - {views} views</div>
      </div>
      <div className={style.bottom}>
        <SourceIcon /> {length}m
      </div>
    </div>
  );
};

VideoItem.defaultProps = {
  className: '',
  author: '',
  thumbnail: 'video-placeholder.png',
};

VideoItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  thumbnail: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default VideoItem;
