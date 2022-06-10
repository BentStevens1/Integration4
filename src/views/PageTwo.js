import { Typography, Box } from '@mui/material';
import AddWord from '../components/AddWord';

function PageTwo(){
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
                <Typography color="primary">Kan je een voorbeeld geven van een term die jou heeft gekwetst?</Typography>
               <AddWord/>
            </Box>
        </>
    )
}

export default PageTwo;


