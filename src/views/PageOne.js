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
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-between'}}> 
                <Typography fontFamily={"Bebas Neue"} variant={'h3'} color="text" sx={{margin: '3rem', textAlign: 'center'}}>Ben jij al eens gekwetst geraakt door woorden zoals die in de video?</Typography>
                <Box>
                     <Link to={`/pageTwo`}><Button variant="contained" color="secondary" sx={{typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", marginBottom: "3rem", fontFamily: "Bebas Neue" }} >Ja</Button></Link>
                     <Link to={`/pageTwo-w`}><Button variant="contained" color="secondary" sx={{typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", marginBottom: "3rem", fontFamily: "Bebas Neue" }}>Nee</Button></Link>
                </Box>
            </Box>
        </>
    )
}

export default PageOne;


