import VideoCard from '../components/VideoCard';
import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from 'react-query';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function VideoOverview(){

  const { isLoading, error, data: videos } = useQuery("videos", async () => {
    const data = await fetch(`${backendUrl}/api/videos?populate=*`).then(r => r.json());
    return data;
  });

    return (
      <Box>
    {isLoading && <p>Loading...</p>}
    {error && <p>Data could not be loaded, please check your internet connection and try again</p>}
    <Typography align='center' variant='h2' sx={{color: 'white'}} >
    Bekijk de ervaringen van anderen
    </Typography>
    <Stack >
        <Stack direction='row' sx={{margin:'1rem', flex: 1, marginTop:'3rem', flexWrap: 'wrap', gap:'4rem', justifyContent: 'center', height: '100vh'}} >
        {videos && videos.data.map(video => <VideoCard key={video.id} video={video} />)}
        </Stack>
      </Stack>
  </Box>)
}

export default VideoOverview;


