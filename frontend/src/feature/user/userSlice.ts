import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface UserState {
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
};

// Thunk example
export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData: any, { rejectWithValue }) => {
    try {
      const res = await fetch("/user.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!res.ok) throw new Error("Failed to create user");
      toast.success("User created!");
      return await res.json();
    } catch (err: any) {
      toast.error("User creation failed");
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
