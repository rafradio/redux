import { configureStore, combineReducers } from '@reduxjs/toolkit'
import tableReducer from '../tableFeatures/tableSlice'

export const store = configureStore({
    reducer: {
        tableR: tableReducer,
    },
});