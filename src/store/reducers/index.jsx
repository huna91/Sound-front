import { combineReducers } from "@reduxjs/toolkit";

// slice
import userSlice from "./userSclice";
import landingActive from "./landingActive";

const rootReducer = combineReducers({
  landingInfo: landingActive.reducer,
  userInfo: userSlice.reducer,
});

export default rootReducer;
