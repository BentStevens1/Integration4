import * as React from 'react';
import { useState } from 'react';
import { Typography, Button, Box, Stack, SwipeableDrawer } from '@mui/material';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';


function PageSix2() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(true);
    }


    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}> 
                <Typography className="title-w" color="black" sx={{ typography: "h1", marginTop: "4rem", textTransform: "uppercase", fontFamily: "Bebas Neue", width: "100%", textAlign: "center" }}>Dat is menselijk, maar</Typography>
                <Typography color="secondary" sx={{ typography: "h3", textTransform: "uppercase", marginTop: "-5rem", fontFamily: "Bebas Neue", width: "80%", textAlign: "center" }}>Dit kan je beter zeggen dan blank</Typography>
                <Typography sx={{ fontSize: '15rem', marginTop: "-5rem",  textTransform: "uppercase", fontFamily: "Bebas Neue", width: "80%", textAlign: "center" }}>"Wit"</Typography>
                <Stack direction="row" sx={{ marginBottom: "5rem" }}>
                    <InfoIcon sx={{ typography: "h3", color: "primary.main", marginRight: "-3rem", marginTop: "1rem" }} /><Button onClick={toggleDrawer} sx={{ typography: "h3", color: "secondary.main", width: "20rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>Over Blank</Button>
                    <SwipeableDrawer
                        anchor="bottom"
                        open={open}
                        onClose={() => setOpen(false)}
                        onOpen={() => { }}
                        hideBackdrop={false}
                    >
                        <Stack direction="column" sx={{ padding: "3rem" }}>
                            <Typography color="black" sx={{ typography: "h3", textTransform: "uppercase", fontFamily: "Bebas Neue", width: "80%" }}>Waarom "Blank" beter niet gebruiken</Typography>
                            <Typography color="black" sx={{ typography: "h4", fontFamily: "Open Sans", width: "100%", marginTop: "2rem" }}>Blank staat voor reinheid, helderheid en onbevlektheid, waardoor je impliceert dat superieur is aan alle andere huidskleuren. Daarom is het zo belangrijk dat we de term 'wit' gebruiken, omdat die net als zwart en bruin óók naar een kleur verwijst.</Typography>
                        </Stack>
                    </SwipeableDrawer>

                    <Link to={`/videoOverview`}><Button sx={{ typography: "h3", bgcolor: "secondary.main", color: "black", width: "20rem", padding: "1rem 0rem", fontFamily: "Bebas Neue" }}>verder</Button></Link>


                </Stack>
            </Box>
        </>
    );
}

export default PageSix2;
