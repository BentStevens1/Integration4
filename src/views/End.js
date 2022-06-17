import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Typography, Button, Box, CardMedia, Card } from '@mui/material';
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
        <Box sx={{ height: '100vh', width: '100vw', padding: "3rem" }}>
            <Box className="title2" sx={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center", justifyContent:"space-evenly", color: "text.secondary" }}>
                <Typography fontSize={"13rem"} fontFamily="Bebas Neue" >Bedankt</Typography>
                <Typography fontSize={"3rem"} fontFamily="Bebas Neue" >voor jouw medewerking</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "2rem", flexDirection: "column" }}>
                <Typography fontFamily="Bebas Neue" variant="h2" margin={"3rem"} textAlign={"center"}>Volg ons op sociale media</Typography>
                <Card className="qr" sx={{borderRadius: "50px"}}></Card>
                <Typography fontFamily="Bebas Neue" textAlign={"center"} sx={{ fontSize: "2rem" }}>spread the sticker and the message</Typography>
                <Link to={`/`}><Button sx={{ fontFamily: "Bebas Neue", alignItems: "center" }}>return to start</Button></Link>
            </Box>
        </Box>
    );
}

export default End;