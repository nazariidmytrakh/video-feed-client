import React from 'react';
import { ReactComponent as LoaderIcon } from '../../../icons/loader-icon.svg';

import style from './style.module.scss';

const Loader = () => (
  <div className={style.loader}>
    <LoaderIcon />
  </div>
);

export default Loader;
