import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import numberSlice from './numberSlice';
import axiosSlice from './axiosSlice';
import snackBarSlice from './snackBarSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        number: numberSlice.reducer,
        axios: axiosSlice.reducer,
        snackbar: snackBarSlice.reducer
    },
    devTools: true
});