/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: sessionStorage.getItem('username') || null,
    role: sessionStorage.getItem('role') || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, role } = action.payload;
      state.user = { username, role };
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('role', role);
    },
    logout: (state) => {
      state.user = { username: null, role: null };
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('email');
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;