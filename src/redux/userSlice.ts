import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        age: 0
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.username = '';
        },
        increment: (state) => {
            state.age++
        },
        decrement: (state) => {
            state.age--
        }
    }
});

export default userSlice