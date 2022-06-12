import { Card} from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const VideoCard = () => {
    const { videoId } = useParams();

    const { isLoading, error, data: video } = useQuery(["video", videoId], async () => {
        const data = await fetch(`${backendUrl}/api/videos/${videoId}?populate=*`).then(r => r.json());
        return data;
    });

    return (
        <article>
            {error && <p>Video could not be loaded</p>}
            {isLoading && <p>Video loading...</p>}
            <Card >
                {video && (<>
                    {video.data.attributes.video.data &&
                           <ReactPlayer
                            url={video.data.attributes.video.data.attributes.url}
                            width='100vw'
                            height='100vh'
                            controls={true}
                            playing= {true}
                        />
                    }
                </>)}
            </Card>
        </article>);

}

export default VideoCard;