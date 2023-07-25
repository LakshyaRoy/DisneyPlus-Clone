// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice"; // Correct the import here

export default configureStore({
  reducer: {
    userSlice,
  },

  // middleware: getDefaultMiddleware({
  //   serializableCheck: false, // to ignore redux-persist warning.
  // }),
});
