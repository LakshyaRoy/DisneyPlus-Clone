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
    getSimilarMovies: builder.query({
      query: (id) => ({
        url: `movie/${id}/similar?`,
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getSearchedTvShow: builder.query({
      query: (searchItem) => ({
        url: `search/tv`,
        params: {
          query: searchItem,
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getTrendingTvShow: builder.query({
      query: () => ({
        url: `trending/tv/week?`,
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getTvshowDetails: builder.query({
      query: (id) => ({
        url: `tv/${id}`,
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getTvShowSimilarly: builder.query({
      query: (id) => ({
        url: `tv/${id}/similar`,
        params: {
          api_key: process.env.REACT_APP_TMDBAPIKEY,
        },
      }),
    }),
    getTvVideosById: builder.query({
      query: (id) => ({
        url: `tv/${id}/videos?`,
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
  useGetSimilarMoviesQuery,
  useGetSearchedTvShowQuery,
  useGetTrendingTvShowQuery,
  useGetTvshowDetailsQuery,
  useGetTvShowSimilarlyQuery,
  useGetTvVideosByIdQuery,
} = tmdbMoviesApi;
