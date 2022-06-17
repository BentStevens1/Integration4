import React, { useState } from 'react';
import VideoRecorder from 'react-video-recorder';
import { Stack, Box, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from 'react-query';
import { Link } from "react-router-dom";
import useStore from '../store/Store';


const backendUrl = process.env.REACT_APP_BACKEND_URL;


const RecordVideo = () => {
    
    const radio = useStore((state) => state.radio);
    console.log(radio);
    const [videoBlob, setVideoBlob] = useState(null);
    const { handleSubmit, reset,  } = useForm();
    const queryClient = useQueryClient()
    


    const postVideo = async (blob) => {
        const formData = new FormData();
        console.log(blob);
        formData.append("data", JSON.stringify({ word: radio }))
        // formData.append("data", JSON.stringify({}))
        formData.append("files.video", blob, 'video.mp4')
        return await fetch(`${backendUrl}/api/videos?populate=*`, {
            method: "POST",
            body: formData
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

    return (
        <div className="record">   
        <Box sx={{ position: 'fixed', zIndex: "0", height:"100vh", width:"100vw"}} >
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
                    console.log('videoBlob', videoBlob);
                    // uploadVideo(videoBlob);
                    // postVideo(videoBlob);
                    setVideoBlob(videoBlob);

                }}
              
                
            /> 
        
        </Box>    
       
            <Stack spacing={4} direction="row" sx={{ position: 'absolute', zIndex: "3", overflowX: 'hidden', bottom:"0", marginBottom:"5rem", marginLeft:"10rem"}} as="form" noValidate onSubmit={handleSubmit(test)}>
                <LoadingButton color="secondary"
                    loadingIndicator="Adding video" type="submit" variant="contained" sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Upload</LoadingButton>
                    <Link to={`/VideoOverview`}><Button sx={{ color: "black", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>Toch geen video opnemen</Button></Link>
            </Stack>
    


        </div>
    );
};

export default RecordVideo;