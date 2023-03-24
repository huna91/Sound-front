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
    // builder.addCase();
    // 이런식으로 하면 될듯
    // .addCase(fetchUserImage.pending, (state) => {
    //     state.userImage;
    //   })
    //   .addCase(fetchUserImage.fulfilled, (state) => {
    //     state.userImage = action.payload.file;
    //   })
    //   .addCase(fetchUserImage.rejected, (state) => {
    //     state.userImage;
    //   })
  },
});

export default userSlice;
