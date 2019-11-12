import { ReactComponent as FacebookIcon } from '../icons/facebook-icon.svg';
import { ReactComponent as YoutubeIcon } from '../icons/youtube-icon.svg';
import { ReactComponent as PlaybuzzIcon } from '../icons/playbuzz-icon.svg';
import { ReactComponent as VideoPlayerIcon } from '../icons/video-player-icon.svg';

// VIDEO SOURCE
export const PLAYBUZZ = 'playbuzz';
export const FACEBOOK = 'facebook';
export const YOUTUBE = 'youtube';
export const URL = 'url';

export const videoIconMap = new Map([
  [PLAYBUZZ, PlaybuzzIcon],
  [FACEBOOK, FacebookIcon],
  [YOUTUBE, YoutubeIcon],
  [URL, VideoPlayerIcon],
]);

videoIconMap.getVideoIcon = (source) => (
  videoIconMap.get(source) || VideoPlayerIcon
);
