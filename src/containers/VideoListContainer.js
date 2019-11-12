import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VideoList from '../components/mainPage/VideoList/VideoList';
import { getVideoList as getVideoListAction } from '../redux/actions/videoList';

const VideoListContainer = (props) => {
  const { videos, totalSize, isLoading, initialLoad } = useSelector(({ videoList }) => videoList);
  const dispatch = useDispatch();

  const getData = useCallback(
    (funcProps) => dispatch(getVideoListAction(funcProps)),
    [dispatch],
  );

  return (
    <VideoList
      loading={isLoading}
      getData={getData}
      videos={videos}
      initialLoad={initialLoad}
      totalSize={totalSize}
      {...props}
    />
  );
};

export default VideoListContainer;
