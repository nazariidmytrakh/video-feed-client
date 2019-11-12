import Toastr from '../../components/common/Toastr/Toastr';
import videoHttpService from '../../services/httpServices/videoHttpService';
import { openToastr } from './toastr';

export const GET_VIDEO_LIST__REQUEST = 'GET_VIDEO_LIST__REQUEST';
export const GET_VIDEO_LIST__SUCCESS = 'GET_VIDEO_LIST__SUCCESS';
export const GET_VIDEO_LIST__FAIL = 'GET_VIDEO_LIST__FAIL';

export const getVideoListRequest = () => ({
  type: GET_VIDEO_LIST__REQUEST,
});

export const getVideoListSuccess = (payload) => ({
  type: GET_VIDEO_LIST__SUCCESS,
  payload,
});

export const getVideoListFail = () => ({
  type: GET_VIDEO_LIST__FAIL,
});

export const getVideoList = ({ page, size }) => async (dispatch) => {
  dispatch(getVideoListRequest());

  try {
    const { videos, totalSize } = await videoHttpService.getVideos({ page, size });
    dispatch(getVideoListSuccess({ videos, totalSize }));
  } catch (error) {
    dispatch(getVideoListFail());
    dispatch(openToastr({
      type: Toastr.RED,
      header: 'Error',
      text: 'Ooops something went wrong. Please try again.',
    }));
  }
};
