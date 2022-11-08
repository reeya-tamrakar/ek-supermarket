import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authReducer'
import collectionsReducer from './features/collections/collectionsReducer'

export default configureStore({
  reducer: {
    auth: authReducer,
    collections: collectionsReducer
  },
})