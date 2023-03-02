import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    saveUser: (state, action) => action.payload
  }
});

export default userSlice;