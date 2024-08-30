import { createSlice } from '@reduxjs/toolkit';

const repoInfoSlice = createSlice({
  name: 'repoData',
  initialState: {
    data: null,
  },
  reducers: {
    setRepoInfo(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setRepoInfo } = repoInfoSlice.actions;
export default repoInfoSlice.reducer;
