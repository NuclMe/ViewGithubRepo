import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GITHUB_PATH } from '../api/apiConsts';

export const issuesApi = createApi({
  reducerPath: 'issuesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_PATH,
  }),
  endpoints: (builder) => ({
    getAllIssues: builder.query<{ userName: string; repoName: string }>({
      query: (arg) => {
        const { userName, repoName } = arg;
        return {
          url: `repos/${userName}/${repoName}/issues`,
        };
      },
    }),
  }),
});

export const { useLazyGetAllIssuesQuery } = issuesApi;
