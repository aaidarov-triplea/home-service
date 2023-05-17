import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const MockApiUrl = "https://644cde8ecfdddac97097dc42.mockapi.io/clean"

export const fetchSpecialists = createAsyncThunk(
    "clean/fetchSpecialists",
    async () => {
      const response = await fetch(MockApiUrl);
      const data = await response.json();
      return data;
    }
  )

  const cleanSlice = createSlice({
    name: "clean",
    initialState: {
      getSpecialist: null,
      isLoading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSpecialists.pending, (state) => {
          state.isLoading = true
          state.error = null
        })
        .addCase(fetchSpecialists.fulfilled, (state, action) => {
          state.isLoading = false
          state.getSpecialist = action.payload
        })
        .addCase(fetchSpecialists.rejected, (state, action) => {
          state.isLoading = false
          state.error = action.error.message
        })
    }
  });
  
  export default cleanSlice.reducer