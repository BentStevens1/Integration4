import { Typography, Box } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords';
import { useQuery } from "react-query";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFour(){

    const { isLoading, data: words } = useQuery("words", async () => {
        const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
        console.log(data);
        return data;
      });

      console.log(words);

    // component waar je een select kan doen en de data ophaalt van de db met woorden, geef het ingevulde woord mee van de input an de worige vraag!!!
    return (
        <>
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-around'}}> 
                <Typography color="primary">Selecteer de termen die jij als kwetsend ervaart</Typography>
                <CheckboxesGroup words={words} />
            </Box>
        </>
    )
}

export default PageFour;