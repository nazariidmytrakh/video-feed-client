const localStorageId = 'emailDate';

const emailLocalStorageService = {
  setLastShowDate(date) {
    return localStorage.setItem(localStorageId, date);
  },
  getLastShowDate() {
    return localStorage.getItem(localStorageId);
  },
};

export default emailLocalStorageService;
