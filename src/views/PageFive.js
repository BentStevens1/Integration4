import { Typography, Box, Button } from '@mui/material';
import RadioGroup from '../components/Radio';
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";


const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFive() {
    const { ids } = useParams();
    const selectedIds = ids.split(`+`);
    console.log(selectedIds);


    // const { isLoading, data: words } = useQuery("words", async () => {
    //     const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
    //     return data;
    // });

    // console.log(words);
    // const selectedWords = [];

    // selectedIds.forEach(selected => {
    //     console.log(selected);
    //     selectedWords.push(words.data[selected]);
    // });

    // console.log(selectedWords);

    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '3rem' }}>
                <Typography fontFamily={"bebas Neue"} variant='h3' color="secondary" sx={{ textAlign: 'center' }}>Zou jij jouw ervaring met één van deze woorden willen delen in de vorm van een korte video (max. 30 seconden)?</Typography>
                {/* {isLoading && <p>Words loading...</p>} */}
                {/* {selectedWords && words && (<>
                    <RadioGroup words={selectedWords} />
                </>)} */}
                <Box>
                    <Link to={`/VideoOverview`}><Button sx={{ typography: "h3", color: "secondary.main", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue"}}>dit kwetst mij niet</Button></Link>
                    <Link to={`/VideoRecorder`}><Button variant="contained" color="secondary" sx={{typography: "h3", color: "black", width: "20rem", padding: "1rem 0rem", marginRight: "3rem", fontFamily: "Bebas Neue" }}>Verder</Button></Link>
                </Box>
            </Box>
        </>
    )
}

export default PageFive;