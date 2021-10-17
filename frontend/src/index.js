import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import { App } from './components';

import 'antd/dist/antd.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import background from './images/background.webp';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-attachment: fixed;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
