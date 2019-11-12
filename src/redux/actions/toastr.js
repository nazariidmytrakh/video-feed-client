export const OPEN__TOASTR = 'OPEN__TOASTR';
export const CLOSE__TOASTR = 'CLOSE__TOASTR';

export const openToastr = (payload) => ({
  type: OPEN__TOASTR,
  payload,
});

export const closeToastr = () => ({
  type: CLOSE__TOASTR,
});
