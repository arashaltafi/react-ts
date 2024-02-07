import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar'
import { ComponentType, ReactElement, useState } from 'react';
import { Alert } from '@mui/material';

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
}

const GrowTransition = (props: GrowProps) => {
  return <Grow {...props} />;
}

const SnackbarSample = () => {
  const [state, setState] = useState<{
    open: boolean;
    Transition: ComponentType<
      TransitionProps & {
        children: ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >,
    ) =>
      () => {
        setState({
          open: true,
          Transition,
        });
      };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <>
      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
        autoHideDuration={1200}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </>
  );
};
export default SnackbarSample;
