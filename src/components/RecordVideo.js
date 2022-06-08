import React from 'react';
import VideoRecorder from 'react-video-recorder';


const RecordVideo = () => {

    return (
        <div className="record">
            <VideoRecorder
                chunkSize={(250)}
                constraints={{
                    audio: true,
                    video: true
                }}
                timeLimit={30000}
                isOnInitially

                    //Replay controls and video not on loop 
                replayVideoAutoplayAndLoopOff
                showReplayControls

                onRecordingComplete={(videoBlob) => {
                    // Do something with the video...
                    console.log('videoBlob', videoBlob)
                }}
                
            /> 


        </div>
    );
};

export default RecordVideo;