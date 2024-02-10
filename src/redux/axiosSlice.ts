import { createSlice } from "@reduxjs/toolkit";

const axiosSlice = createSlice({
    name: 'axios',
    initialState: {
        axiosReq: null,
        isLoading: false,
        error: null,
        data: null
    },
    reducers: {
        setAxiosReq: (state, action) => {
            state.axiosReq =  action.payload.axiosReq
        },
        setLoading: (state, action) => {
            state.isLoading =  action.payload.isLoading
        },
        setError: (state, action) => {
            state.error =  action.payload.error
        },
        setData: (state, action) => {
            state.data =  action.payload.data
        },
        reset: (state) => {
            state.isLoading = false
            state.error = null
        }
    }
});

export default axiosSlice