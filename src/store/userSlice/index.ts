import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  id: string;
  name: string;
  surname: string;
}

const initialState: IUserState = {
  id: "string",
  name: "string",
  surname: "string",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

// export const { setUser } = userSlice.actions;
export default userSlice;
