import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const scriptId = 'playbuzz-sdk';

const PlaybuzzVideoModal = ({ videoId }) => {
  useEffect(() => {
    const removePlaybuzzSdk = () => {
      const playBuzzScript = document.querySelector(`#${scriptId}`);

      playBuzzScript.parentNode.removeChild(playBuzzScript);
    };

    return removePlaybuzzSdk;
  }, []);

  return (
    <div className={style.videoWrapper}>
      <script>
        {
          (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = '//embed.playbuzz.com/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', scriptId))
        }
      </script>
      <div className="playbuzz" data-id={videoId} data-show-share="false" data-show-info="false" data-comments="false" />
    </div>
  );
};

PlaybuzzVideoModal.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default PlaybuzzVideoModal;
