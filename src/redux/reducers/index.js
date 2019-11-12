import { combineReducers } from 'redux';

import toastrReducer from './toastrReducer';
import videoListReducer from './videoListReducer';

export default combineReducers({
  toastr: toastrReducer,
  videoList: videoListReducer,
});
