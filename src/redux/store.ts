import { configureStore } from '@reduxjs/toolkit';
import { issuesApi } from './issuesApi';
import issuesDataReducer from './issuesDataSlice';

export const store = configureStore({
  reducer: {
    [issuesApi.reducerPath]: issuesApi.reducer,
    issuesData: issuesDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(issuesApi.middleware),
});
