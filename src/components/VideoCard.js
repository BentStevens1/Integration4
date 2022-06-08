import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ id, video }) => {

  return (<Link to={`/VideoOverview/${video.id}`}>
  <Card sx={{backgroundColor: 'black'}}>
    
    <CardContent>
    {video.attributes.word.data &&
      <Typography align='center' variant="h3" color="text.secondary" component="h2">
    {video.attributes.word.data.attributes.content}
      </Typography>
    }
      {video.attributes.video.data &&
      <CardMedia
        component="img"
        alt={video.attributes.video.data.attributes.name}
        width="200px"
        src={video.attributes.video.data.attributes.previewUrl}
      />
    }
    </CardContent>
  </Card>
  </Link>);
}

export default VideoCard;