import CheckboxesGroup2 from '../components/SelectReason';
import { Typography, Button, Box, Stack} from '@mui/material';
import { Link } from "react-router-dom";

function PageFive2(){

    return (
        <>
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}> 
          <Typography color="secondary" sx={{ typography: "h2", marginTop: "5rem", textTransform: "uppercase", fontFamily: "Bebas Neue", width:"80%", textAlign:"center" }}>Hoe komt het dat je deze term wel eens gebruikt?</Typography>
          <Typography color="secondary" sx={{ typography: "h4", marginTop: "-10rem", textTransform: "uppercase", fontFamily: "Bebas Neue", textAlign: "center" }}>Selecteer één of meerdere antwoorden</Typography>
          <CheckboxesGroup2/>
          <Stack direction="row" sx={{ marginBottom: "5rem" }}>
            <Link to={`/pageSix-w`}> <Button sx={{ typography: "h3", color: "secondary.main", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue"}}>Weet ik niet</Button></Link>
            <Link to={`/pageSix-w`}> <Button sx={{ typography: "h3", bgcolor: "secondary.main", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>Verder</Button></Link>
          </Stack>
        </Box>
        </>
      );
}

export default PageFive2;


