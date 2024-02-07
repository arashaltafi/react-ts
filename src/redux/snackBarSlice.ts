import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type snackbarSettingType = {
    isOpen: boolean,
    message: string,
    duration: number,
}

interface NumberState {
    snackbarSetting: snackbarSettingType
}

const initialState: NumberState = {
    snackbarSetting: {
        isOpen: false,
        message: '',
        duration: 3000,
    }
}

const snackBarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        setSnackBar: (state, action: PayloadAction<snackbarSettingType>) => {
            state.snackbarSetting = action.payload
        },
    }
});

export default snackBarSlice