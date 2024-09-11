import { createSlice } from '@reduxjs/toolkit';

const closedIssuesDataSlice = createSlice({
  name: 'closedIssuesData',
  initialState: {
    data: null,
  },
  reducers: {
    setClosedIssues(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setClosedIssues } = closedIssuesDataSlice.actions;
export default closedIssuesDataSlice.reducer;
