import { configureStore } from '@reduxjs/toolkit';
import { issuesApi } from './issuesSlice';

export const store = configureStore({
  reducer: {
    [issuesApi.reducerPath]: issuesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(issuesApi.middleware),
});
