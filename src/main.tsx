import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/index.ts';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { issuesApi } from './redux/issuesApi.ts';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider api={issuesApi}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApiProvider>
);
