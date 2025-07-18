import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../service/api";

export const getAllCampers = createAsyncThunk(
  "campers/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/campers");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCampersBySearchParams = createAsyncThunk(
  "campers/selected",
  async ({ page, limit, params }, { rejectWithValue }) => {
    const url = params
      ? `/campers?page=${page}&limit=${limit}&${params}`
      : `/campers?page=${page}&limit=${limit}`;

    try {
      const { data } = await api.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
