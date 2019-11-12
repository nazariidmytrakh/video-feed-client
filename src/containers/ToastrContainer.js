import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeToastr } from '../redux/actions/toastr';
import Toastr from '../components/common/Toastr/Toastr';

const ToastrContainer = (props) => {
  const { text, header, type, open } = useSelector(({ toastr }) => toastr);
  const dispatch = useDispatch();

  const onClose = useCallback(
    () => dispatch(closeToastr()),
    [dispatch],
  );

  return (
    open
      ? <Toastr text={text} header={header} type={type} onClose={onClose} {...props} />
      : null
  );
};

export default ToastrContainer;
