import { Typography, Box } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords';
import { useQuery } from "react-query";

const backendUrl = process.env.REACT_APP_BACKEND_URL;


function PageTwo2() {

    const wordsWithVideo = []

    const { isLoading, data: words } = useQuery("words", async () => {
        const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
        const words = data.data;
        words.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
         return words;
    });

    if (!isLoading) {
        words.forEach(word => {
            if (word.attributes.videos.data.length !== 0 && wordsWithVideo.length < 6) {
                wordsWithVideo.push(word);
            }
        })
    }

    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Typography fontFamily={"bebas Neue"} variant='h3' color="secondary" sx={{ textAlign: 'center' }} >Selecteer de term die het meest wordt gebruikt in jouw omgeving:</Typography>
                {words && (<>
                    <CheckboxesGroup words={wordsWithVideo} />
                </>)}
            </Box>
        </>
    )
}

export default PageTwo2;


