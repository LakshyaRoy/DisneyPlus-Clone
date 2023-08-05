// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice"; // Correct the import here
import movieReducer from "../feature/movie/MoviesSlice";
import { tmdbMoviesApi } from "../feature/movie/tmdbApi";

export default configureStore({
  reducer: {
    userSlice,
    movie: movieReducer,
    [tmdbMoviesApi.reducerPath]: tmdbMoviesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbMoviesApi.middleware),
});
