import { Typography, Box, Button } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords';
import { useQuery } from "react-query";
import { Link} from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFour2(){

    const { isLoading, data: words } = useQuery("words", async () => {
        const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
        console.log(data);
        return data;
      });

      console.log(words);

      // geef gekozen woord mee
    return (
        <>
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-around'}}> 
                <Typography color="primary">gebruik jij deze term wel eens?</Typography>
                <Link to={`/pageFive-w`}><Button>Ja</Button></Link>
                <Link to={`/pageSix-w`}><Button>Nee</Button></Link>
            </Box>
        </>
    )
}

export default PageFour2;