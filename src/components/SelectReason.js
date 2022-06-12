import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';



const CheckboxesGroup2 = () => {


    const [state, setState] = React.useState({
        one: true,
        two: false,
        three: false,
        four: false,
    });


    const handleChange = (event) => {
        //  event.preventDefault();
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { one, two, three, four } = state;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 6 }} component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel

                        control={
                            <Checkbox checked={one} onChange={handleChange} name='niet kwetsend' />
                        }
                        label='Ik vind dit niet kwetsend'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={two} onChange={handleChange} name='wist niet' />
                        }
                        label='Ik wist nog niet dat dit mensen kwetst'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={three} onChange={handleChange} name='vrienden' />
                        }
                        label='Mijn vrienden gebruiken het'
                    />
                    <FormControlLabel
                        control={
                            <TextField onChange={handleChange} name='Anders' placeholder='Anders...' />
                        }
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxesGroup2;