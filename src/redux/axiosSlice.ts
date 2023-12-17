import { createSlice } from "@reduxjs/toolkit";

const axiosSlice = createSlice({
    name: 'axios',
    initialState: {
        isLoading: false,
        error: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading =  action.payload.isLoading
        },
        setError: (state, action) => {
            state.error =  action.payload.error
        },
        reset: (state) => {
            state.isLoading = false
            state.error = null
        }
    }
});

export default axiosSlice