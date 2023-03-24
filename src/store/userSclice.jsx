import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  walletAddress: "",
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // 유저 정보 리셋
    reset: (state, action) => {
      state = action.payload;
      console.log("초기화된 state:", action.payload);
    },
    // 유저 잔고 확인
    getBalance: (state, action) => {
      state.balance = action.payload;
      console.log("유저 잔고", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default userSlice;
