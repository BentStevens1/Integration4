import { Typography, Button, Box } from '@mui/material';
import { Link} from "react-router-dom";

function PageOne(){
    var style= {
        width: '40vh',
        height: '10vh',
        fontSize: "40px", 
        border: "none",
        backgroundColor: "white",
        color: "1C6F81",
        margin: "2rem",
        fontFamily: "Inter, Arial",
        fontweight: "700",
        borderRadius: "12px", 
        alignSelf: "flex-end"
    }
    return (
        <>
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-around'}}> 
                <Typography color="primary">Ben je al eens benoemd geweest met een woord zoals deze?</Typography>
                <Box>
                     <Link to={`/pageTwo`}><Button variant="contained" color="secondary" sx={{padding: "1rem 4rem", margin:"2rem"}} >Ja</Button></Link>
                     <Button variant="contained" color="secondary" sx={{padding: "1rem 4rem", margin:"2rem"}}>Nee</Button>
                </Box>
                </Box>
        </>
    )
}

export default PageOne;

