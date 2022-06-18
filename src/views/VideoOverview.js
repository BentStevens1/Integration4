import VideoCard from '../components/VideoCard';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import useStore from '../store/Store';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function VideoOverview() {

  const setOverlay = useStore(state => state.setOverlay);
  setOverlay(false)


  const { isLoading, error, data: videos } = useQuery("videos", async () => {
    const data = await fetch(`${backendUrl}/api/videos?populate=*`).then(r => r.json());
    return data;
  });

  // const getRandomInt = (max) => {
  //   return Math.floor(Math.random() * max);
  // }

  // var arrayVideos = [];

  // if (!isLoading) {
  //   const length = videos.data.length;

  //   while (arrayVideos.length < 5) {
  //     var random = videos.data[getRandomInt(length)];
  //     if (arrayVideos.includes(random) === false && random !== videos.data[length - 1].attributes.url) {
  //       arrayVideos.push(random);
  //     }
  //   }

  //   console.log(arrayVideos);

  // };
  return (
    <Box sx={{ padding: '3rem' }}>
      {isLoading && <p>Videos aan het laden...</p>}
      {error && <p>Data could not be loaded, please check your internet connection and try again</p>}
      <Typography align='center' variant='h3' fontFamily={"bebas Neue"} sx={{ color: 'white' }} >
        Bekijk anderen hun ervaringen
      </Typography>
      <Stack >
        <Stack direction='row' sx={{ flex: 1, marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center', height: '100vh' }} >
          {videos && videos.data.map(video => <VideoCard key={video.id} id={video.id} video={video} sx={{ position: "absolute" }} />)}
        </Stack>
      </Stack>
      <Link to={`/End`}><Button variant="contained" color="secondary" sx={{typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue", zIndex: "3"}}>Ik ben klaar</Button></Link>
    </Box>)
}

export default VideoOverview;


