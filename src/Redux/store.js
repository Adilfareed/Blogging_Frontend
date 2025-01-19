// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './slices/blogsSlice';
import authReducer from "./slices/authslice"
const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    auth:authReducer
  },
});

export default store;
