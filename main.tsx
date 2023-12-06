import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/components/app/app.tsx';
import { store } from './src/store/store.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
