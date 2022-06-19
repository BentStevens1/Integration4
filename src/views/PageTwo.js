import { Typography, Box } from '@mui/material';
import AddWord from '../components/AddWord';
import {  React } from "react";

function PageTwo(){

    return (
        <>
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-between', padding:'3rem'}}> 
                <Typography fontFamily={"Bebas Neue"} variant="h3" color="secondary" sx={{textAlign:'center'}}>Kan je een voorbeeld geven van een term die jou heeft gekwetst?</Typography>
               <AddWord />
            </Box>
        </>
    )
}

export default PageTwo;


