import FullVideo from '../components/FullVideo';
import { Typography, Button, Box  } from '@mui/material';
import { Link } from "react-router-dom";
// import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';

function VideoDetail() {
  return (
    <div sx={{position:"relative", display:"flex"}} >
      <FullVideo sx={{position:"absolute", zIndex:"1"}} />  
      <Link to={`/videoOverview`}></Link>
      {/* <CloseFullscreenOutlinedIcon color="primary" fontSize="large" sx={{ zIndex: "2", position: "absolute", bottom: "3rem", right: "3rem" }} /> */}
    </div>
  );
}

export default VideoDetail;