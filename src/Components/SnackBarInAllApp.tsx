import Fade from '@mui/material/Fade';
import { TransitionProps } from '@mui/material/transitions';
import Snackbar from '@mui/material/Snackbar'
import { ComponentType, ReactElement, useState } from 'react';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const SnackBarInAllApp = () => {
    const snackbarSetting = useSelector((state: any) => state.snackbar.snackbarSetting);

    const [state, setState] = useState<{
        open: boolean;
        Transition: ComponentType<
            TransitionProps & {
                children: ReactElement<any, any>;
            }
        >;
    }>({
        open: snackbarSetting.isOpen,
        Transition: Fade,
    });

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <>
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message=""
                key={state.Transition.name}
                autoHideDuration={snackbarSetting.duration}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarSetting.message}
                </Alert>
            </Snackbar>
        </>
    );
}

export default SnackBarInAllApp