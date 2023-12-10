import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: 'number',
    initialState: {
        numbers: [1, 2, 3]
    },
    reducers: {
        addNumbers: (state, action) => {
            state.numbers = [...state.numbers, ...action.payload]
        }
    }
});

export default numberSlice