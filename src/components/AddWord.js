import { Alert, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';


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
    mutation.mutate(data)
  }

  const handleCloseSnackbar = () => {
    mutation.reset();
  }


  return (
    <Stack spacing={4} sx={{ flex: 1 }} as="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField sx={{ input: { color: 'white' } }}
        id="content"
        label="Vul het woord in"
        variant="filled"
        error={!!errors?.title}
        helperText={errors?.title?.message}
        {...register("content", {
        })}
      />

      <Link to="/pageThree"><LoadingButton loading={mutation.isLoading} color="secondary"
        loadingIndicator="Adding video" type="submit" variant="contained">Start</LoadingButton></Link>
      <Snackbar open={mutation.isSuccess} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Word added
        </Alert>
        

      </Snackbar>
    </Stack>
  );
}

export default AddWord;