// placeholder voor dat we de video's hebben/ kunnen opnemen
import { Alert, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { styled } from '@mui/material/styles';
import SelectChip from "./Select";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const defaultValues = {
  word: '',
};

const Input = styled('input')({
  display: 'none',
});


const AddVideo = () => {
  const { handleSubmit, formState: { errors }, register, control, reset, watch } = useForm({ defaultValues });
  const queryClient = useQueryClient()
  const { isLoading, data: words } = useQuery("words", async () => {
    const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
    // console.log(data);
    return data;

  });

  const postVideo = async (data) => {
    const formData = new FormData();
    console.log(data);
    if (data.video.length > 0) {
      formData.append("files.video", data.video[0], data.video[0].name);
    }
    formData.append("data", JSON.stringify({ ...data, video: null }))

    console.log(data.video);
    console.log(formData.get('files.video'))

    return await fetch(`${backendUrl}/api/videos?populate=*`, {
      method: "POST",
      body: formData,
    }).then(r => r.json());
  }

  const mutation = useMutation(postVideo, {
    onSuccess: () => {
      console.log("success")
      queryClient.invalidateQueries('videos');
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
  
      <Controller
        control={control}
        name="word"
        variant="filled"
        rules={{ required: "Pick a word" }}
        render={({ field, fieldState }) => <SelectChip error={fieldState.error} field={field} label="Word" options={isLoading ? [] : words.data.map(word => ({ id: word.id, name: word.attributes.content }))} />}
      />
      <Stack direction="row" spacing={2} alignItems="center">
        <label htmlFor="contained-button-file">
          <Input id="contained-button-file" type="file"  {...register("video")} />
          <Button variant="contained" component="span" disabled={mutation.isLoading} color="secondary">
            Select video
          </Button>
        </label>
        <Typography color="primary">{watch("video") && watch("video").length > 0 && watch("video")[0].name} </Typography>
      </Stack>

      <LoadingButton loading={mutation.isLoading} color="secondary"
        loadingIndicator="Adding video" type="submit" variant="contained">Add video</LoadingButton>
      <Snackbar open={mutation.isSuccess} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Video added
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AddVideo;