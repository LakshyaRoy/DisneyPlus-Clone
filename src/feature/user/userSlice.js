import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      // console.log("Payload received:", action.payload);
      state.user = action.payload;
      // state.name = action.payload.name;
      // state.email = action.payload.email;
      // state.photo = action.payload.photoUrl;
    },
    setSignOutState: (state) => {
      state.user = {};
      // state.name = null;
      // state.email = null;
      // state.photo = null;
    },
  },
});

export const { setSignOutState, setUserLoginDetails } = userSlice.actions;

// export const selectUserName = (state) => state.user.name;
// export const selectUserEmail = (state) => state.user.email;
// export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
