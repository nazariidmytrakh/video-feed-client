import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../generic/Modal/Modal';
import PlaybuzzVideoModal from './PlaybuzzVideoModal/PlaybuzzVideoModal';
import YoutubeVideoModal from './YoutubeVideoModal/YoutubeVideoModal';
import FacebookVideoModal from './FacebookVideoModal/FacebookVideoModal';
import UrlVideoModal from './UrlVIdeoModal/UrlVideoModal';

import style from './style.module.scss';

const videoComponentsMap = new Map([
  ['playbuzz', PlaybuzzVideoModal],
  ['youtube', YoutubeVideoModal],
  ['facebook', FacebookVideoModal],
  ['url', UrlVideoModal],
]);

const VideoModal = ({ onClose, videoInfo }) => {
  const { source } = videoInfo;
  const VideoComponent = videoComponentsMap.get(source);

  return (
    <Modal onClose={onClose}>
      <div className={style.videoWrapper}>
        <VideoComponent {...videoInfo} />
      </div>
    </Modal>
  );
};

VideoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  videoInfo: PropTypes.object.isRequired,
};

export default VideoModal;
