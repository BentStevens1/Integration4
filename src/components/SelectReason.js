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
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { one, two, three, four } = state;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl component="fieldset" variant="standard">
                <FormGroup sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControlLabel className="reason1"
                        control={
                            <Checkbox checked={one} onChange={handleChange} name='one' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "1rem" }} />
                        }
                        label={<Typography sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Ik vind dit niet kwetsend</Typography>}
                    />
                    <FormControlLabel className="reason2" sx={{ marginTop: "2rem" }}
                        control={
                            <Checkbox checked={two} onChange={handleChange} name='two' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "1rem" }} />
                        }
                        label={<Typography sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Ik wist nog niet dat dit mensen kwetst</Typography>}
                    />
                    <FormControlLabel className="reason3 " sx={{ marginTop: "2rem" }}
                        control={
                            <Checkbox checked={three} onChange={handleChange} name='three' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "1rem" }} />
                        }
                        label={<Typography sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Mijn vrienden gebruiken het</Typography>}
                    />
                    <FormControlLabel className="input2" sx={{ marginTop: "2rem", }}
                        control={
                            <TextField onChange={handleChange} name='Anders' placeholder='Anders...' variant="standard" inputProps={{ style: { fontSize: 30, fontFamily: "Bebas Neue", color: "black" } }} InputLabelProps={{ style: { fontSize: 30, fontFamily: "Bebas Neue", color: "black"} }} />}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxesGroup2;