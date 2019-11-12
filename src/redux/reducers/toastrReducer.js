import { CLOSE__TOASTR, OPEN__TOASTR } from '../actions/toastr';

const initialState = {
  open: false,
  header: '',
  text: '',
  type: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN__TOASTR:
      return {
        ...state,
        open: true,
        header: payload.header,
        text: payload.text,
        type: payload.type,
      };
    case CLOSE__TOASTR:
      return {
        ...state,
        open: false,
        header: '',
        text: '',
        type: '',
      };
    default:
      return state;
  }
};
