import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SEARCH_MEAL } from "../../services/dataService";

export const fetchSearchByName = createAsyncThunk(
  "searchByName/fetchSearchByName",
  async (searchTerm) => {
    const response = await fetch(`${SEARCH_MEAL}${searchTerm}`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  meals: [],
  searchTerm: "",
};

const searchByNameSlice = createSlice({
  name: "searchByName",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchByName.fulfilled, (state, action) => {
      state.meals = action.payload.meals;
    });
  },
});

export const searchByNameReducer = searchByNameSlice.reducer;
