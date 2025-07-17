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

export const getLimitedListOfCampers = createAsyncThunk(
  "campers/pagination",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/campers?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
