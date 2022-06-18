import { Card, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const VideoCard2 = (word) => {

    console.log(word);
    const videoId = word.word.attributes.videos.data[0].id
    console.log(videoId);

    const navigate = useNavigate();

    const { isLoading, data: video } = useQuery("videos", async () => {
        const data = await fetch(`${backendUrl}/api/videos/${videoId}?populate=*`).then(r => r.json());
        return data.data;
    });

    const navigateBack = () => {
        navigate('/PageFour-w');
    }

    return (
        <article>
            <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                {isLoading && <p>Video aan het laden...</p>}
                {video && (<>
                {/* {console.log(video.attributes.video.data.attributes.url)} */}
                    <Typography className="title" fontFamily="Bebas Neue" variant="h3" sx={{ color: "text.secondary", zIndex: "2", position: "absolute", top: "1rem" }} >Ervaring met het woord {word.word.attributes.content}</Typography>

                    <ReactPlayer
                        url={video.attributes.video.data.attributes.url}
                        width='100vw'
                        height='100vh'
                        controls={true}
                        playing={true}
                        sx={{ zIndex: " 1", position: "absolute" }}
                        onEnded={navigateBack}
                    />

                </>)}
            </Card>
        </article>);

}

export default VideoCard2;