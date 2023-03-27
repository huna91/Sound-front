import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  landing_active: true,
};

const landingActive = createSlice({
  name: "landingActive",
  initialState,
  reducers: {
    // 랜딩페이지 온오프
    passive: (state, action) => {
      state.landing_active = false;
    },
  },
});

export const { passive } = landingActive.actions;

export default landingActive;
