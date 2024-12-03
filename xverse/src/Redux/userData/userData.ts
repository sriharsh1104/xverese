import { createSlice } from "@reduxjs/toolkit";

// InitialState for userData
const initialState: any = {
  userInfo: "",
};

// UserData SLICE
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetAuthenticationDataSlice: (state, action) => {
      state.userInfo = "";
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { resetAuthenticationDataSlice, setUserInfo } =
  userDataSlice.actions;
export default userDataSlice.reducer;
