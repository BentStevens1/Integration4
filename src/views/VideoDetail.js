import FullVideo from '../components/FullVideo';
import { Typography, Button, Box } from '@mui/material';
import { Link } from "react-router-dom";

function VideoDetail() {
  return (
    <div >
      <FullVideo />  
      <Link to={`/videoOverview`}><Button>terug</Button></Link>
    </div>
  );
}

export default VideoDetail;