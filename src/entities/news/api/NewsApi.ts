import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'NewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0' }),
  endpoints: (builder) => ({
    getNewStories: builder.query({
      query: () => 'newstories.json',
    }),
    getStoryById: builder.query({
      query: (storyId) => `item/${storyId}.json`,
    }),
  }),
});

export const { useGetNewStoriesQuery, useGetStoryByIdQuery } = newsApi;