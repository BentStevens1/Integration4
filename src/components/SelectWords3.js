import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form";
import { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import useStore from '../store/Store';


const CheckboxesGroup = ({ words }) => {

  const selectedWords = useStore((state) => state.selectedWs)
  const AddSelected = useStore((state) => state.AddSelectedWords)
  const RemoveSelected = useStore((state) => state.RemoveWord)


  // store in zustand ipv state zodat je ze in alle andere pagina's ook kan gebruiken
  // const [selectedWords, setSelectedWords] = useState([])

  const { handleSubmit } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });

  const onCheckboxChange = (e, word) => {
    if (e.currentTarget.checked) {
      AddSelected(word);
    } else {
      const index = selectedWords.findIndex(o => o.id === word.id)
      console.log(index);
      if (index > -1) {
        const newWords = [...selectedWords];
        newWords.splice(index, 1);
        RemoveSelected(newWords);
      }
    }
  }

  console.log(selectedWords);
  // const onCheckboxChange = (e, word) => {
  //   if (e.currentTarget.checked) {
  //     setSelectedWords([...selectedWords, word])
  //   } else {
  //     const index = selectedWords.findIndex(o => o.id === word.id)
  //     if (index > -1) {
  //       const newWords = [...selectedWords];
  //       newWords.splice(index, 1);
  //       setSelectedWords(newWords);
  //     }
  //   }
  // }

  const onSubmit = () => {

  };

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr 1fr", gap: "1rem"}} >
          {
            words.map(word => <FormControlLabel className="select" key={word.id}
              control={
                <Checkbox color="secondary" sx={{ textColor: "text.primary" }} value={word.attributes.content} onChange={e => onCheckboxChange(e, word)} checked={selectedWords.find(o => o.id === word.id) !== undefined} />
              }
              label={
                <Typography sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>{word.attributes.content}</Typography>
              }
            />)
          }
        </FormGroup>
      </FormControl>
      <Box sx={{marginTop:"15rem"}}>
        <Link to={`/VideoOverview`}><Button sx={{ typography: "h3", color: "secondary.main", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>dit kwetst mij niet</Button></Link>
        <Link to={`/PageFive`}><Button variant="contained" color="secondary" sx={{ typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>Verder</Button></Link>
      </Box>
    </Box>
  );
}

export default CheckboxesGroup;