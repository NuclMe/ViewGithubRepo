import { createSlice } from '@reduxjs/toolkit';

const openAssignedIssuesDataSlice = createSlice({
  name: 'openAssignedIssuesData',
  initialState: {
    data: null,
  },
  reducers: {
    setOpenAssignedIssues(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setOpenAssignedIssues } = openAssignedIssuesDataSlice.actions;
export default openAssignedIssuesDataSlice.reducer;
