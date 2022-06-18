import React, { useRef, useEffect } from 'react';

const Camera = () => {
    
    const videoRef = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height: 1080 }
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect( () => {
        getVideo();
    }, [videoRef])

    return (
        <div>
            <div className="camera">
                <video ref={videoRef}></video>


            </div>
        </div>
    );
};

export default Camera;