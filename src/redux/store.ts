import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import numberSlice from './numberSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        number: numberSlice.reducer
    }
});