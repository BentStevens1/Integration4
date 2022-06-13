import FullVideo from '../components/FullVideo';
import { Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

function PageThree2(){

    return (
        <>
          <FullVideo />  
          <Link to={`/pagefour-w`}><Button>Volgende</Button></Link>
        </>
      );
}

export default PageThree2;


