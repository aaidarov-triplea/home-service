import { createSlice } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export const loginUser = ({ email, password }) => {
    return async (dispatch) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user
        dispatch(loginUserFulfilled(user))
        return user
      } catch (error) {
        dispatch(loginUserRejected(error.message))
      }
    }
  }

const userSlice = createSlice({
    name: 'user',
    initialState: {
      uid: null,
      email: null,
      username: null,
      avatar: null,
      phoneNumber: null,
      error: null,
    },
    reducers: {
        loginUserFulfilled: (state, action) => {
            const user = action.payload
            state.uid = user.uid
            state.email = user.email
            state.username = user.displayName
            state.avatar = user.photoURL
            state.phoneNumber = user.phoneNumber
            state.error = null
          },
      loginUserRejected: (state, action) => {
        state.uid = null
        state.email = null
        state.username = null
        state.avatar = null
        state.phoneNumber = null
        state.error = action.payload
      },
    },
  })
  
  export const { loginUserFulfilled, loginUserRejected } = userSlice.actions
  export default userSlice.reducer