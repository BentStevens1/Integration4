import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm } from "react-hook-form";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import useStore from '../store/Store';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const CheckboxesGroup = ({ words }) => {

  const checkRadio = useStore((state) => state.CheckRadio);

  const { handleSubmit, formState: { errors }, register, control, reset, watch } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });

  const onRadioChange = (e, word) => {
    if (e.currentTarget.checked) {
      checkRadio(word);
    }

  }

  const onSubmit = () => {
    // console.log(`selected: ${state}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard" onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {
            words.map(word => <FormControlLabel key={word.id} value={word.attributes.content}
              control={
                <Radio onChange={e => onRadioChange(e, word)} />
              }
              label={word.attributes.content}
            />)
          }
        </RadioGroup>
      </FormControl>

      <Box>
        <Link to={`/VideoOverview`}><Button sx={{ marginTop: "3rem", width: "14rem", color: 'text.primary', fontFamily: "Bebas Neue" }}>dit kwetst mij niet</Button></Link>
        <Link to={`/PageThree-w`}><Button variant="contained" color="secondary" sx={{ marginTop: "3rem", width: '14rem', padding: '.5rem', fontFamily: 'Bebas Neue' }}>Verder</Button></Link>
      </Box>
    </Box>
  );
}

export default CheckboxesGroup;