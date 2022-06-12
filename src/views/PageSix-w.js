import { Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

function PageSix2() {

    return (
        <>
            <Typography>Dat is menselijk!</Typography>
            <Typography>Dit kan je beter zeggen dan blank</Typography>
            <Typography>Wit</Typography>
            <Link to={`/videoOverview`}><Button>verder</Button></Link>
        </>
    );
}

export default PageSix2;
