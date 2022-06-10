import AddVideo from '../components/AddVideo';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

function PageThree(){

    return (
        <>
          <AddVideo />
        <Link to={`/pageFour`}> <Typography>skip this step</Typography></Link>
        </>
      );
}

export default PageThree;


