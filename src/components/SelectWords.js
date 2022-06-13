import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Alert, Button, Snackbar, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useMutation, useQuery, useQueryClient } from 'react-query';


const CheckboxesGroup = ({ words }) => {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const length = words.data.length;

    var arrayWords = [];

    while (arrayWords.length < 5) {
        var random = words.data[getRandomInt(length)].attributes.content;
        if (arrayWords.includes(random) == false && random !== words.data[length - 1].attributes.content) {
            arrayWords.push(random);
        }
    };

    const word1 = arrayWords[0];
    const word2 = arrayWords[1];
    const word3 = arrayWords[2];
    const word4 = arrayWords[3];
    const word5 = arrayWords[4];
    const word6 = words.data[length - 1].attributes.content;

    const [state, setState] = React.useState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
    });


    const handleChange = (event) => {
        //  event.preventDefault();
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { one, two, three, four, five, six } = state;
    

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 6 }} component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel

                        control={
                            <Checkbox checked={one} onChange={handleChange} name={word1} />
                        }
                        label={word1}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={two} onChange={handleChange} name={word2} />
                        }
                        label={word2}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={three} onChange={handleChange} name={word3} />
                        }
                        label={word3}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={four} onChange={handleChange} name={word4} />
                        }
                        label={word4}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={five} onChange={handleChange} name={word5} />
                        }
                        label={word5}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={six} onChange={handleChange} name={word6} />
                        }
                        label={word6}
                    />
                </FormGroup>
            </FormControl>
            {/* <LoadingButton loading={mutation.isLoading} color="secondary"
        loadingIndicator="Adding words" type="submit" variant="contained">verder</LoadingButton>
      <Snackbar open={mutation.isSuccess} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Antwoord verstuurd
        </Alert>
      </Snackbar> */}
        </Box>
    );
}

export default CheckboxesGroup;