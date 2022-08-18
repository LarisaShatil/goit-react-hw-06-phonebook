import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  contacts: {
    items: [],
    filter: ''
  }
}

export const store = configureStore({
  reducer: {},
  initialState,
});