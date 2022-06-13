import { Alert, Snackbar, Stack, TextField, Typography, Button, Box, CardMedia} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from 'react-query';
import { Link, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import '../index.css';


const backendUrl = process.env.REACT_APP_BACKEND_URL;

const defaultValues = {
    content: '',
    score: '1',
};

const Input = styled('input')({
    display: 'none',
});


const AddWord = () => {
    const { handleSubmit, formState: { errors }, register, control, reset, watch } = useForm({ defaultValues });
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const postWord = async (data) => {
        const formData = new FormData();
        console.log(data);
        formData.append("data", JSON.stringify({ ...data, video: null }))
        return await fetch(`${backendUrl}/api/words`, {
            method: "POST",
            body: formData,
        }).then(r => r.json());
    }

    const mutation = useMutation(postWord, {
        onSuccess: () => {
            console.log("success")
            queryClient.invalidateQueries('words');
            reset()
        },
    })

    const onSubmit = data => {
        mutation.mutate(data);
        navigate('/pageThree');
    }

    const handleCloseSnackbar = () => {
        mutation.reset();
    }


    return (
        <Stack class='input' spacing={4} as="form" noValidate onSubmit={handleSubmit(onSubmit)} >
            <TextField sx={{ input: { color: 'text.secondary', fontFamily:'Bebas Neue'} }}
                id="content"
                label="Schrijf jouw woord hier..."
                variant="standard"
                fontFamily="Bebas Neue"
                error={!!errors?.title}
                helperText={errors?.title?.message}
                {...register("content", {
                })}
            />

            <Box>
                <Link to={`/pageFour`}><Button sx={{marginTop:"3rem", width:'14rem', color:'text.primary', fontFamily:'Bebas Neue'}}>overslaan</Button></Link>
                <LoadingButton loading={mutation.isLoading} color="secondary"
                    loadingIndicator="Adding word" type="submit" variant="contained" sx={{marginTop:"3rem", width:'14rem', padding:'.5rem', fontFamily:'Bebas Neue'}}>Verder</LoadingButton>
                <Snackbar open={mutation.isSuccess} anchorOrigin={{ vertical: "bottom", horizontal: "right", fontFamily:'Bebas Neue'}} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Woord ontvangen
                    </Alert>
                </Snackbar>
            </Box>

        </Stack >
    );
}

export default AddWord;