import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { getUsersMe } from "../api/client";

const fetchMe = createAsyncThunk("users/me", async () => {
  const response = await getUsersMe();
  return response.data;
});

interface UsersState {
  me: string;
}

const initialState: UsersState = {
  me: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.me = action.payload.email;
    });
  },
});

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
