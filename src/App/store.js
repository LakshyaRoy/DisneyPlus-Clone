// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice"; // Correct the import here
import movieReducer from "../feature/movie/MoviesSlice";

export default configureStore({
  reducer: {
    userSlice,
    movie: movieReducer,
  },

  // middleware: getDefaultMiddleware({
  //   serializableCheck: false, // to ignore redux-persist warning.
  // }),
});
