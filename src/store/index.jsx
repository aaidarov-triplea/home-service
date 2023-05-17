import { configureStore } from "@reduxjs/toolkit"
import cleanReducer from './cleanSlice'
import electricSlice from './electricSlice'
import plumpingSlice from "./plumpingSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    clean: cleanReducer,
    electric: electricSlice,
    plumping: plumpingSlice,
    user: userReducer,
  },
})

export default store