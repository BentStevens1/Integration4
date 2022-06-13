import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';



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
            <FormControl component="fieldset" variant="standard">
                <FormGroup sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <FormControlLabel 
                        control={
                            <Checkbox checked={one} onChange={handleChange} name='niet kwetsend' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } , marginRight:"2rem"}}/>
                        }
                        label={<Typography sx={{ typography: "h2", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Ik vind dit niet kwetsend</Typography>}
                    />
                    <FormControlLabel sx={{ marginTop: "5rem" }}
                        control={
                            <Checkbox checked={two} onChange={handleChange} name='wist niet' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "2rem"}} />
                        }
                        label={<Typography sx={{ typography: "h2", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Ik wist nog niet dat dit mensen kwetst</Typography>}
                    />
                    <FormControlLabel sx={{ marginTop: "5rem" }}
                        control={
                            <Checkbox checked={three} onChange={handleChange} name='vrienden' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "2rem"}}/>
                        }
                        label={<Typography sx={{ typography: "h2", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Mijn vrienden gebruiken het</Typography>}
                    />
                    <FormControlLabel sx={{ marginTop: "5rem" }}
                        control={
                            <TextField onChange={handleChange} name='Anders' placeholder='Anders...' inputProps={{ style: { fontSize: 50, fontFamily: "Bebas Neue" } }} InputLabelProps={{ style: { fontSize: 50, fontFamily: "Bebas Neue"}}} />
                        }
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxesGroup2;