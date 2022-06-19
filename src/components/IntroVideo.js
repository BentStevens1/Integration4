import { Card} from "@mui/material";
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";

const VideoCard = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/PageOne');
    } 

    return (
        <article>
            <Card sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                           <ReactPlayer
                            url='youtube.com/watch?v=XQ46oV-gQMg'
                            width='100vw'
                            height='100vh'
                            controls={true}
                            playing= {true}
                            sx={{zIndex:" 1", position:"absolute"}}
                            onEnded={navigateBack}
                        />
            </Card>
        </article>);

}

export default VideoCard;