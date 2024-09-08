import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GITHUB_PATH } from '../api/apiConsts';

export const issuesApi = createApi({
  reducerPath: 'issuesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_PATH,
  }),
  endpoints: (builder) => ({
    getAllIssues: builder.query({
      query: ({ userName, repoName }) => ({
        url: `repos/${userName}/${repoName}/issues`,
      }),
    }),
    getOpenAssignedIssues: builder.query({
      query: ({ userName, repoName }) => ({
        url: `repos/${userName}/${repoName}/issues?state=open&assignee=*`,
      }),
    }),
    getRepoInfo: builder.query({
      query: ({ userName, repoName }) => ({
        url: `repos/${userName}/${repoName}`,
      }),
    }),
  }),
});

export const {
  useLazyGetAllIssuesQuery,
  useLazyGetOpenAssignedIssuesQuery,
  useLazyGetRepoInfoQuery,
} = issuesApi;
