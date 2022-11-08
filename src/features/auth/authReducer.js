import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    access_token: localStorage.getItem('access_token') || '',
    refresh_token: localStorage.getItem('refresh_token') || '',
    fullName : localStorage.getItem('fullName') || ''
  },
  reducers: {
    setTokens: (state, action) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      localStorage.setItem('access_token', action.payload.access_token)
      localStorage.setItem('refresh_token', action.payload.refresh_token)
    },
    setFullName: (state, action) =>{
      state.fullName = action.payload.fullName;
      localStorage.setItem('fullName', action.payload.fullName)
    }
  },
})

export const {setTokens, setFullName} = authSlice.actions

export default authSlice.reducer