import { Typography, Box, Button } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;


function PageTwo2() {

    const wordsWithVideo = []

    const { isLoading, data: words } = useQuery("words", async () => {
        const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
        const words = data.data;
        // words.sort((a, b) => Math.random() > 0.5 ? -1 : 1);
        // return words.slice(0, 6);
         return words;
    });

    if (!isLoading) {
        words.forEach(word => {
            if (word.attributes.videos.data.length != 0 && wordsWithVideo.length < 6) {
                wordsWithVideo.push(word);
            }
        })
    }

    var style = {
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


