import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSclice";

const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
});

export default rootReducer;
