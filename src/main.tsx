import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { issuesApi } from './redux/issuesSlice.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={issuesApi}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
);

