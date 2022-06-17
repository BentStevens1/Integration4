import FullVideo2 from '../components/FullVideo-w';
import { Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import useStore from '../store/Store';


function PageThree2(){
  const radio = useStore((state) => state.radio);

    return (
        <>
          <FullVideo2 word={radio} />  
          <Link to={`/pagefour-w`}><Button>Volgende</Button></Link>
        </>
      );
}

export default PageThree2;


