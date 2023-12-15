import { useStyles } from '../utils/useStyles';
import { Container, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Radio, RadioGroup, FormControlLabel, Stack } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Person } from '@mui/icons-material';
import AlarmAddRoundedIcon from '@mui/icons-material/AlarmAddRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

const MaterialUI = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Material-UI Widgets
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" paragraph className={classes.marginTop}>
                    Sample usage of Material-UI components
                </Typography>

                {/* Button */}
                <div className={'flex items-center justify-center gap-8 mt-8'}>
                    <Button variant="contained" color="primary">Button</Button>
                    <Button variant="text" color="primary">Text</Button>
                    <Button variant="contained" color="error" sx={{ color: 'text.white' }}>Contained</Button>
                    <Button variant="outlined" color="success">Outlined</Button>
                    <Button variant="outlined" color="success" startIcon={<AlarmAddRoundedIcon />} size='large' sx={{ paddingLeft: 4, paddingRight: 4 }}>Outlined</Button>
                </div>

                <Button sx={{ marginTop: 4 }} variant="contained" className={classes.test}>Custom className</Button>

                {/* TextField */}
                <TextField className={classes.marginTop} label="Input" variant="outlined" fullWidth margin="normal" placeholder="Type something" />

                {/* Checkbox */}
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    className={classes.marginTop}
                    label="Checkbox"
                />

                {/* Radio */}
                <FormControl component="fieldset" className={classes.marginTop}>
                    <RadioGroup defaultValue="radio1" row>
                        <FormControlLabel value="radio1" control={<Radio />} label="Radio 1" />
                        <FormControlLabel value="radio2" control={<Radio />} label="Radio 2" />
                    </RadioGroup>
                </FormControl>

                {/* Stack */}
                <Stack direction="row" spacing={2} className={classes.marginTop}>
                    <Button variant="contained" color="primary">
                        Stack Item 1
                    </Button>
                    <Button variant="contained" color="secondary">
                        Stack Item 2
                    </Button>
                </Stack>

                {/* Select */}
                <FormControl fullWidth variant="outlined" margin="normal" className={classes.marginTop}>
                    <InputLabel id="select-label">Select</InputLabel>
                    <Select label="Select" labelId="select-label">
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                </FormControl>

                <div className='flex items-center justify-center mt-8 gap-8'>
                    <AlarmAddRoundedIcon sx={{ width: 70, height: 70 }} className='hover:text-red-500 cursor-pointer' />
                    <Person sx={{ width: 70, height: 70 }} className='hover:text-red-500 cursor-pointer' />
                    <Brightness4RoundedIcon sx={{ width: 70, height: 70 }} className='hover:text-red-500 cursor-pointer' />
                </div>
            </Container>
        </div>
    )
}

export default MaterialUI