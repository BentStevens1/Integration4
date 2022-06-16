import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import {  React } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {

    function getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
      }

  return (<Link to={`/VideoOverview/${video.id}`}>
  <Card sx={{backgroundColor: 'transparent'}}>
    
    <CardContent sx={{position:"relative" ,display:"flex", justifyContent:"center", alignItems:"center"}}>
    <CardMedia
    component="img"
    src={require("../img/Frame.png")}
    sx={{zIndex:"2", position:"absolute", width:"4rem" }}
    />
      {video.attributes.video.data &&
      <CardMedia
        component="img"
        alt={video.attributes.video.data.attributes.name}
        height={getRandomInt(50, 200)}
        src={video.attributes.video.data.attributes.previewUrl}
        sx={{zIndex:"1"}}
      />
    }
    </CardContent>
  </Card>
  </Link>);
}

export default VideoCard;