import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
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
    getSearch: builder.query({
      query: (searchParam) => ({
        url: "search/movie",
        params: {
          query: searchParam,
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getMoviesDetails: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getMoviesVideo: builder.query({
      query: (id) => ({
        url: `movie/${id}/videos?`,
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetSearchQuery,
  useGetMoviesDetailsQuery,
  useGetMoviesVideoQuery,
} = tmdbMoviesApi;
