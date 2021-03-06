import { Typography, Box } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords3';
import { useQuery } from "react-query";


const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFour() {

    const { isLoading, data: words } = useQuery("words", async () => {
        const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
        const words = data.data;
        words.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        return words.slice(0, 6);
    });


    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '3rem' }}>
                <Typography fontFamily={"bebas Neue"} variant='h3' color="secondary" sx={{ textAlign: 'center' }}>Selecteer de termen die jij als kwetsend ervaart</Typography>
                {isLoading && <p>Words loading...</p>}
                {words && (<>
                    <CheckboxesGroup words={words} />
                </>)}
            </Box>
        </>
    )
}

export default PageFour;