import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Typography, Button, Box } from '@mui/material';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function End() {
    return (
        <Box sx={{ height: '100vh', width: '100vw', padding:"3rem"}}>
            <Box className="title" sx={{ display: "flex", flexDirection: "row", gap:"1rem", alignItems:"center", color:"text.secondary"}}>
                <Typography fontSize={"6rem"} fontFamily="Bebas Neue" >Bedankt</Typography>
                <Typography fontSize={"2rem"} fontFamily="Bebas Neue" >voor jouw medewerking</Typography>
            </Box>
            <Typography fontFamily="Bebas Neue" variant="h2" margin={"3rem"} textAlign={"center"}>Volg ons op sociale media</Typography>
            <Typography>...qr-code...</Typography>
            <Typography fontFamily="Bebas Neue" textAlign={"center"}>spread the sticker and the message</Typography>
            <Link to={`/`}><Button sx={{ fontFamily: "Bebas Neue" }}>return to start</Button></Link>

        </Box>


    );
}

export default End;