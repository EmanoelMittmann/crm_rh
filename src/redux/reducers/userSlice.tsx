import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    user: "",
    password: "",
    islogged: false,
  },

  reducers: {
    changeUser(state, { payload }) {
      return { ...state, islogged: true, user: payload, password: payload };
    },

    logout(state) {
      return { ...state, islogged: false, user: "" };
    },
  },
});
export const { changeUser, logout } = slice.actions;

export const selectUser = (state: { user: any }) => state.user;

export default slice.reducer;
