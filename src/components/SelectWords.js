import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm } from "react-hook-form";
import { Button, Typography } from '@mui/material';
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
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
        >
          {
            words.map(word => <FormControlLabel className='select' key={word.id} value={word.attributes.content}
              control={
                <Radio sx={{
                  color: "black",
                  '&.Mui-checked': {
                    color: "black",
                  },
                }} onChange={e => onRadioChange(e, word)} />
              }
              label={<Typography sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>{word.attributes.content}</Typography>}
            />)
          }
        </RadioGroup>
      </FormControl>

      <Box sx={{marginTop: "15rem"}}>
        <Link to={`/VideoOverview`}><Button sx={{ typography: "h3", color: "secondary.main", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>Geen enkele</Button></Link>
        <Link to={`/PageThree-w`}><Button variant="contained" color="secondary" sx={{ typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", fontFamily: "Bebas Neue" }}>Verder</Button></Link>
      </Box>
    </Box>
  );
}

export default CheckboxesGroup;