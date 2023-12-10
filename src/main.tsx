import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { store } from './store/store.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '../config.tsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
