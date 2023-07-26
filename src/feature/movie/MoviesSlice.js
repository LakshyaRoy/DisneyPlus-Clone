import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = MovieSlice.actions;

export const selectRecommended = (state) => state.movie.recommended;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default MovieSlice.reducer;
