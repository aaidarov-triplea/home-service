import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const MockApiUrl = "https://645c9df7e01ac610588e38eb.mockapi.io/plumbing"

export const fetchSpecialists = createAsyncThunk(
    "plumping/fetchSpecialists",
    async () => {
      const response = await fetch(MockApiUrl)
      const data = await response.json()
      return data
    }
  )

  const plumpingSlice = createSlice({
    name: "plumping",
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
  
  export default plumpingSlice.reducer