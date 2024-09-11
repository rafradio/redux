import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    dataForTable: [{id: '1',firstName: 'firstName', lastName: 'test'}],
}

export const tableSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counterValue += 1
        },
    }
});

export const selectDataForTable = state => state.counter.dataForTable;

export default tableSlice.reducer;