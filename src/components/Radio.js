import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from "react-hook-form";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";


const RadioBoxes = ({ words }) => {

  const { handleSubmit, formState: { errors }, register, control, reset, watch } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });

  const [state, setState] = React.useState([]);

  console.log(words);


  const handleChange = (event) => {
    const index = state.indexOf(event.target.value);
    if (index === -1) {
      setState([...state, event.target.value])
    } else {
      setState(state.filter((s) => s !== event.target.value))
    };
  };

  console.log(state);

  const onSubmit = () => {
    console.log(`selected: ${state}`);
  };

  const { one } = state;


  const id = state;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard" onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {words.data.forEach(word =>
            <FormControlLabel value={{ word }} control={<Radio />} label={{ word }} />
          )}
        </RadioGroup>
      </FormControl>

      <Box>
        <Link to={`/VideoOverview`}><Button sx={{ marginTop: "3rem", width: "14rem", color: 'text.primary', fontFamily: "Bebas Neue" }}>dit kwetst mij niet</Button></Link>
        <Link to={`/PageFive/${id}`}><Button variant="contained" color="secondary" sx={{ typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>Verder</Button></Link>
      </Box>
    </Box>
  );
}

export default RadioBoxes;