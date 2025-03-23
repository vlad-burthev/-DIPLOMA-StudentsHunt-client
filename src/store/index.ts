import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import userSlice from "./userSlice";
import { companyApi } from "../api/companyApi";

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    // user: userSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(authApi.middleware, companyApi.middleware),
});
