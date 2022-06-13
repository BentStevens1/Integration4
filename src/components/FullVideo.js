import { Card, Typography} from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const VideoCard = () => {
    const { videoId } = useParams();
    const navigate = useNavigate();

    const { isLoading, error, data: video } = useQuery(["video", videoId], async () => {
        const data = await fetch(`${backendUrl}/api/videos/${videoId}?populate=*`).then(r => r.json());
        return data;
    });

    const navigateBack = () => {
        navigate('/VideoOverview');
    } 

    return (
        <article>
            {error && <p>Video could not be loaded</p>}
            {isLoading && <p>Video loading...</p>}
            <Card sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                {video && (<>
                { video.data.attributes.word.data &&
                <Typography className="title" fontFamily="Bebas Neue" variant="h3" sx={{color:"text.secondary", zIndex: "2", position:"absolute", top: "1rem"}} >Ervaring met het woord {video.data.attributes.word.data.attributes.content}</Typography>
                   } {video.data.attributes.video.data &&
                           <ReactPlayer
                            url={video.data.attributes.video.data.attributes.url}
                            width='100vw'
                            height='100vh'
                            // controls={true}
                            playing= {true}
                            sx={{zIndex:" 1", position:"absolute"}}
                            onEnded={navigateBack}
                        />
                    }
                </>)}
            </Card>
        </article>);

}

export default VideoCard;