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


// const useStore = create((set) => ({
//   selectedWords: 0,
//   setSelectedW: () => set((state) => ({ selectedWords})),
// }))

  // store in zustand ipv state zodat je ze in alle andere pagina's ook kan gebruiken
  const [selectedWords, setSelectedWords] = useState([])

  const { handleSubmit } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });

  const onCheckboxChange = (e, word) => {
    if (e.currentTarget.checked) {
      setSelectedWords([...selectedWords, word])
    } else {
      const index = selectedWords.findIndex(o => o.id === word.id)
      if (index > -1) {
        const newWords = [...selectedWords];
        newWords.splice(index, 1);
        setSelectedWords(newWords);
      }
    }
  }

  const onSubmit = () => {
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: "column" }}>
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          {
            words.map(word => <FormControlLabel key={word.id}
              control={
                <Checkbox value={word.attributes.content} onChange={e => onCheckboxChange(e, word)} checked={selectedWords.find(o => o.id === word.id) !== undefined} />
              }
              label={word.attributes.content}
            />)
          }

        </FormGroup>
      </FormControl>
      <Box>
        <Link to={`/VideoOverview`}><Button sx={{ marginTop: "3rem", width: "14rem", color: 'text.primary', fontFamily: "Bebas Neue" }}>dit kwetst mij niet</Button></Link>
        <Link to={`/PageFive/`}><Button variant="contained" color="secondary" sx={{ marginTop: "3rem", width: '14rem', padding: '.5rem', fontFamily: 'Bebas Neue' }}>Verder</Button></Link>
      </Box>
    </Box>
  );
}

export default CheckboxesGroup;