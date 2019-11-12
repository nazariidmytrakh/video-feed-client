import {
  GET_VIDEO_LIST__FAIL,
  GET_VIDEO_LIST__REQUEST,
  GET_VIDEO_LIST__SUCCESS,
} from '../actions/videoList';

const initialState = {
  videos: [],
  totalSize: 0,
  isLoading: false,
  initialLoad: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEO_LIST__REQUEST:
      return {
        ...state,
        isLoading: true,
        initialLoad: true,
      };
    case GET_VIDEO_LIST__SUCCESS:
      return {
        ...state,
        videos: [...state.videos, ...payload.videos],
        totalSize: payload.totalSize,
        isLoading: false,
      };
    case GET_VIDEO_LIST__FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
