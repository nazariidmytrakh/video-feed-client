import api from '../../utils/api';
import config from '../../config';

const { apiUrl } = config;

const emailHttpService = {
  postEmail(body) {
    return api.post(`${apiUrl}/emails`, body);
  },
};

export default emailHttpService;
