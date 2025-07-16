import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../service/api";

export const selectCamperById = createAsyncThunk(
  "details/selectedById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
