import React from 'react';
import ReactDOM from 'react-dom';
import './components/style/index.css';
import App from './App';
import Header from './components/layout/Header';


ReactDOM.render(
  <React.StrictMode>
<Header />
<App />
  </React.StrictMode>,
  document.getElementById('root')
);

