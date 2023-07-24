// store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice"; // Correct the import here

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false, // to ignore redux-persist warning.
  }),
});
