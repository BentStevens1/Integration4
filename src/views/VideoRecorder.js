import RecordVideo from '../components/RecordVideo';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function VideoRecorder() {

    return (
        <>
            <RecordVideo />
            <Link to={`/VideoOverview`}><Button>Toch geen video opnemen</Button></Link>
        </>
    );
}

export default VideoRecorder;

