import { Typography, Box, Button, Stack } from '@mui/material';
import { Link} from "react-router-dom";


const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFour2(){

    return (
        <>
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-between'}}> 
                <Typography color="secondary" sx={{ typography: "h2", marginTop: "5rem", textTransform: "uppercase", fontFamily:"Bebas Neue"}}>gebruik jij deze term wel eens?</Typography>
                <Stack direction="row" sx={{ marginBottom:"5rem"}}>
                    <Link to={`/pageFive-w`}><Button sx={{ typography: "h3", bgcolor: "secondary.main", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue"}} >Ja</Button></Link>
                    <Link to={`/pageSix-w2`}><Button sx={{ typography: "h3", bgcolor: "secondary.main", color: "black", padding: "1rem 0rem", width: "20rem", fontFamily: "Bebas Neue" }}>Nee</Button></Link>
                </Stack>

            </Box>
        </>
    )
}

export default PageFour2;