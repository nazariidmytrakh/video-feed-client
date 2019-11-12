import api from '../../utils/api';
import config from '../../config';

const { apiUrl } = config;

const videoHttpService = {
  getVideos({ page, size }) {
    return api.get(`${apiUrl}/videos?page=${page}&size=${size}`);
  },
};

export default videoHttpService;
