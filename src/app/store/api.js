import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NEWS_API_URL,
  }),
  endpoints: (build) => ({
    getArticles: build.query({
      query: ({search, country, category}) => ({
        url: "top-headlines",
        params: {
          apiKey: process.env.REACT_APP_NEWS_API_KEY,
          q: search,
          country,
          category,
          // sortBy: "popularity",
          // from: "2023-11-24",
          // page: 1,
          // pageSize: 10
        },
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = newsApi;
