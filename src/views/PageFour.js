import { Typography, Box, Button } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFour() {

    const { isLoading, data: words } = useQuery("words", async () => {
        const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
        console.log(data);
        return data;
    });

    console.log(words);

    // component waar je een select kan doen en de data ophaalt van de db met woorden, geef het ingevulde woord mee van de input an de worige vraag!!!
    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding:'3rem'}}>
                <Typography fontFamily={"bebas Neue"} variant='h3' color="secondary" sx={{textAlign:'center'}}>Selecteer de termen die jij als kwetsend ervaart</Typography>
                {isLoading && <p>Words loading...</p>}
                {words && (<>
                    <CheckboxesGroup words={words} />
                </>)}
                <Box>
                    <Link to={`/VideoOverview`}><Button sx={{ marginTop: "3rem", width:"14rem", color:'text.primary', fontFamily:"Bebas Neue"}}>dit kwetst mij niet</Button></Link>
                    <Link to={`/VideoRecorder`}><Button variant="contained" color="secondary" sx={{ marginTop: "3rem", width: '14rem', padding: '.5rem', fontFamily: 'Bebas Neue' }}>Verder</Button></Link>
                </Box>
            </Box>
        </>
    )
}

export default PageFour;