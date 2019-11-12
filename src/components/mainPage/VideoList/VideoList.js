import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import VideoItem from './VIdeoItem/VideoItem';
import numberFormatter from '../../../utils/helpers/numberFormatter';
import VideoItemError from './VideoItemError/VideoItemError';
import Loader from '../../common/Loader/Loader';
import VideoModal from '../VideoModal/VideoModal';
import lengthFormatter from '../../../utils/helpers/lengthFormatter';
import dateFormatter from '../../../utils/helpers/dateFormatter';
import brokenVideoDefiner from '../../../utils/helpers/brokenVideoDefiner';

import style from './style.module.scss';

const videoRequiredFields = ['title', 'videoId'];
const pageSize = 2;
const defaultState = {
  currentPage: 0,
  isVideoModalOpen: false,
  activeVideo: null,
};

const VideoList = ({ videos, totalSize, getData, loading, initialLoad }) => {
  const [state, setState] = useReducer((newState, oldState) => (
    { ...newState, ...oldState }
  ), defaultState);
  const { currentPage, isVideoModalOpen, activeVideo } = state;

  const totalPages = Math.ceil(totalSize / pageSize);
  const hasMoreVideos = currentPage < totalPages - 1 || !initialLoad;

  const handleVideoClick = (video) => () => (
    setState({ isVideoModalOpen: true, activeVideo: video })
  );
  const handleVideoModalClose = () => setState({ isVideoModalOpen: false, activeVideo: null });
  const handleLoadMore = (page) => {
    getData({ size: pageSize, page });
    setState({ currentPage: page });
  };

  /* eslint-disable-next-line */
  const renderVideoItem = ({ id, videoId, title, date, views, length, source, url, thumbnailUrl, authorName }) => (
    <div key={id} className={style.videoItemWrapper}>
      <VideoItem
        title={title}
        className={style.videoItem}
        date={dateFormatter({ date, format: 'MMM DD, YYYY' })}
        views={numberFormatter(views)}
        length={lengthFormatter({ length, format: 'm:ss' })}
        source={source}
        thumbnail={thumbnailUrl}
        author={authorName}
        onClick={handleVideoClick({ videoId, source, url })}
      />
    </div>
  );

  /* eslint-disable-next-line */
  const renderVideoItemError = ({ id }) => (
    <div key={id} className={style.videoItemWrapper}>
      <VideoItemError className={style.videoItemError} />
    </div>
  );

  return (
    <div className={style.videoList}>
      <div className={style.label}>Most viewed</div>
      <InfiniteScroll
        pageStart={-1}
        loadMore={handleLoadMore}
        hasMore={hasMoreVideos && !loading}
        className={style.content}
      >
        {
          videos.map((video) => (
            brokenVideoDefiner({ video, requiredFields: videoRequiredFields }).isBroken
              ? renderVideoItemError(video)
              : renderVideoItem(video)
          ))
        }
      </InfiniteScroll>
      {loading && <Loader />}
      {isVideoModalOpen && <VideoModal videoInfo={activeVideo} onClose={handleVideoModalClose} />}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  totalSize: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  initialLoad: PropTypes.bool.isRequired,
};

export default VideoList;
