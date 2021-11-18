import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    id: "",
    userName: "",
    role: {
      id: "",
      roleName: "",
    },
    person: {
      id: "",
      fullName: "",
    },
    access_token: "",
    expires_in: 0,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("state: ", state);
      console.log("action: ", action);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
