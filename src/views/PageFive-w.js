import CheckboxesGroup2 from '../components/SelectReason';
import { Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

function PageFive2(){

    return (
        <>
        <CheckboxesGroup2/>
        <Link to={`/pageSix-w`}> <Typography>Weet ik niet</Typography></Link>
        <Link to={`/pageSix-w`}> <Button>Verder</Button></Link>
        </>
      );
}

export default PageFive2;


