import React, { useState } from 'react';
import VideoRecorder from 'react-video-recorder';
import { Stack} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from 'react-query';



const backendUrl = process.env.REACT_APP_BACKEND_URL;


const RecordVideo = () => {

    const [url, setUrl] = useState("");
    const [videoBlob, setVideoBlob] = useState(null);
 
    const { handleSubmit, reset,  } = useForm();
    const queryClient = useQueryClient()


    const postVideo = async (blob) => {
        const data = new FormData();
        console.log(blob);
        data.append("video", blob);
        console.log(data.get('video'))
        return await fetch(`${backendUrl}/api/videos?populate=*`, {
            method: "POST",
            body: data,
        }).then(r => r.json());
    }

    const mutation = useMutation(postVideo, {
        onSuccess: () => {
            console.log("success")
            queryClient.invalidateQueries('videos');
            reset()
        },
    })

    const test = () => {
        mutation.mutate(videoBlob)
    }

    // const uploadVideo = (blob) => {
    //     const data = new FormData();
    //     data.append("file", blob);
    //     data.append("upload_preset", "upload");
    //     data.append("cloud_name", "dt6nw5zid");
    //     fetch(" https://api.cloudinary.com/v1_1/dt6nw5zid/video/upload", {
    //         method: "post",
    //         body: data
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setUrl(data.url)
    //     })
    //     .catch(err => console.log(err));
    //     console.log(url)
    // }


    return (
        <div className="record">       
            <VideoRecorder
                chunkSize={(250)}
                constraints={{
                    audio: true,
                    video: true
                }}
                // timeLimit={30000}
                isOnInitially

                //Replay controls and video not on loop 
                replayVideoAutoplayAndLoopOff
                showReplayControls
                
                onRecordingComplete={(videoBlob) => {
                    // Do something with the video...
                    console.log('videoBlob', videoBlob.type);
                    // uploadVideo(videoBlob);
                    // postVideo(videoBlob);
                    setVideoBlob(videoBlob);
                }}
                
            /> 
 
            <Stack spacing={4} sx={{ flex: 1 }} as="form" noValidate onSubmit={handleSubmit(test)}>
                <LoadingButton color="secondary"
                    loadingIndicator="Adding video" type="submit" variant="contained">Upload</LoadingButton>
            </Stack>


        </div>
    );
};

export default RecordVideo;