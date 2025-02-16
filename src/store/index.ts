import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // user: userSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(authApi.middleware),
});
