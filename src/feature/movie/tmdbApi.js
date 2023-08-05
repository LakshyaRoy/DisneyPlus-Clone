import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// const TmdbHeaders = {
//   headers: {
//     method: "GET",
//     accept: "application/json",
//     Authorization: "0022c33a438446a440a826bee1006809",
//   },
// };

const baseUrl = "https://api.themoviedb.org/3/";
// const createRequest = (url) => ({ url, headers: TmdbHeaders.headers });

export const tmdbMoviesApi = createApi({
  reducerPath: "tmdbMoviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => ({
        url: "movie/popular",
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery } = tmdbMoviesApi;
