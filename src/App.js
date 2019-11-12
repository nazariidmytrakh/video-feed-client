import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import MainLayout from './components/common/MainLayout/MainLayout';
import EmailModalContainer from './containers/EmailModalContainer';
import ToastrContainer from './containers/ToastrContainer';
import MainPage from './pages/MainPage';

const App = () => (
  <Provider store={store}>
    <MainLayout>
      <MainPage />
    </MainLayout>
    <EmailModalContainer />
    <ToastrContainer />
  </Provider>
);

export default App;
