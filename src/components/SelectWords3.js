import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";


const CheckboxesGroup = ({ words }) => {
  console.log(words);

  const [arrayWords, setWords] = useState([1, 2, 3, 4, 5]);
  const length = words.data.length;

  const { handleSubmit } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  const [state, setState] = React.useState([]);

  const fillArray = () => {
    var value = [];
    var n = 5;
    for (var i = 0; i < n; i++) {
      while (value.length < 5) {
        var number = getRandomInt(length);
        var random = words.data[number].id;
        if (value.includes(number) == false && random !== words.data[length - 1].id) {
          value.push(number);
        }
      }
    }
    return value;
  };

  useEffect(() => {
    const data = fillArray();
    setWords([data]);
  }, []);

  const word1 = arrayWords[0][0];
  const word2 = arrayWords[0][1];
  const word3 = arrayWords[0][2];
  const word4 = arrayWords[0][3];
  const word5 = arrayWords[0][4];
  const word6 = words.data[length - 1].attributes.content;

  const handleChange = (event) => {
    const index = state.indexOf(event.target.value);
    if (index === -1) {
      setState([...state, event.target.value])
    } else {
      setState(state.filter((s) => s !== event.target.value))
    };
  };

  console.log(state);
  console.log(state.join('+'));

  const onSubmit = () => {
    console.log(`selected: ${state}`);
  };

  const { one, two, three, four, five, six } = state;

  return (
    <Box sx={{ display: 'flex' , flexDirection: "column"}}>
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={one} onChange={handleChange} name="one" value={word1} />
            }
            label={word1}
          />
          <FormControlLabel
            control={
              <Checkbox checked={two} onChange={handleChange} name="two" value={word2} r />
            }
            label={word2}
          />
          <FormControlLabel
            control={
              <Checkbox checked={three} onChange={handleChange} name="three" value={word3} />
            }
            label={word3}
          />
          <FormControlLabel
            control={
              <Checkbox checked={four} onChange={handleChange} name="four" value={word4} />
            }
            label={word4}
          />
          <FormControlLabel
            control={
              <Checkbox checked={five} onChange={handleChange} name="five" value={word5} />
            }
            label={word5}
          />
          <FormControlLabel
            control={
              <Checkbox checked={six} onChange={handleChange} name="six" value={word6} />
            }
            label={word6}
          />
        </FormGroup>
      </FormControl>

      <Box>
        <Link to={`/VideoOverview`}><Button sx={{ marginTop: "3rem", width: "14rem", color: 'text.primary', fontFamily: "Bebas Neue" }}>dit kwetst mij niet</Button></Link>
        <Link to={`/PageFive/${state.join('+')}`}><Button variant="contained" color="secondary" sx={{ marginTop: "3rem", width: '14rem', padding: '.5rem', fontFamily: 'Bebas Neue' }}>Verder</Button></Link>
      </Box>
    </Box>
  );
}

export default CheckboxesGroup;