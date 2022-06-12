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
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <Typography>Bedankt</Typography>
            <Typography>voor jouw medewerking</Typography>
            <Typography>Volg ons op sociale media</Typography>
            <Typography>...qr-code...</Typography>
            <Typography>spread the sticker and the message</Typography>

            <Link to={`/`}><Button>return to start</Button></Link>

        </Box>


    );
}

export default End;