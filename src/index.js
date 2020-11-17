import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider, Empty } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/language';
import store from './redux/store';
import theme from './configs/theme';
import AppWrapper, { GlobalStyle } from './appStyle';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.less';

import { initFirebase } from './api/firebase';

initFirebase();
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <GlobalStyle />
          <ConfigProvider renderEmpty={() => <Empty />}>
            <Routes />
          </ConfigProvider>
        </AppWrapper>
      </ThemeProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
