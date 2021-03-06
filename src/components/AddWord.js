import { Alert, Snackbar, Stack, TextField, Button, Box } from '@mui/material';
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
        navigate('/pageFour');
    }

    const handleCloseSnackbar = () => {
        mutation.reset();
    }


    return (
        <Stack as="form" noValidate onSubmit={handleSubmit(onSubmit)} >
            <TextField className='input2' sx={{ color: 'text.secondary', padding: "2rem 1rem", input: { color: 'text.secondary', fontFamily: 'Bebas Neue', fontSize: "5rem" } }}
                id="content"
                variant="standard"
                placeholder="exotisch"
                required
                color="text"
                error={!!errors?.content}
                helperText={errors?.content?.message}
                {...register("content", {
                    required: 'Vul aub een woord in of klik op overslaan'
                })}
            />

            <Box>
                <Stack direction="row" sx={{ marginTop: "8rem" }}>
                    <Link to={`/pageFour`}><Button sx={{ typography: "h3", color: "secondary.main", width: "20rem", padding: "1rem 0rem", fontFamily: "Bebas Neue" }}>overslaan</Button></Link>
                    <LoadingButton loading={mutation.isLoading} color="secondary" loadingIndicator="Adding word" type="submit" variant="contained" sx={{ typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", fontFamily: "Bebas Neue" }}>Verder</LoadingButton>
                </Stack>

                <Snackbar open={mutation.isSuccess} anchorOrigin={{ vertical: "bottom", horizontal: "right", fontFamily: 'Bebas Neue' }} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Woord ontvangen
                    </Alert>
                </Snackbar>
            </Box>
        </Stack >
    );
}

export default AddWord;