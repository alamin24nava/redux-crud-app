import { configureStore } from '@reduxjs/toolkit'
import attendanceReducer from '../features/attendance/attendanceSlice'
export const store = configureStore({
  reducer: {
    attendanceReducer:attendanceReducer
  },
})

export default store;