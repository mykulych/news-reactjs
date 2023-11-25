import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NEWS_API_URL,
  }),
  endpoints: (build) => ({
    getArticles: build.query({
      query: () => ({
        url: "everything",
        params: {
          q: "Apple",
          sortBy: "popularity",
          from: "2023-10-24",
          apiKey: process.env.REACT_APP_NEWS_API_KEY,
          page: 1,
          pageSize: 10
        },
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = newsApi;
