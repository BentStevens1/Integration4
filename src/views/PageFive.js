import { Typography, Box} from '@mui/material';
import RadioGroup from '../components/Radio';
import useStore from '../store/Store';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function PageFive() {
    const selectedWs = useStore((state) => state.selectedWs);
    console.log(selectedWs);

    return (
        <>
            <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '3rem' }}>
                <Typography fontFamily={"bebas Neue"} variant='h3' color="secondary" sx={{ textAlign: 'center' }}>Zou jij jouw ervaring met één van deze woorden willen delen in de vorm van een korte video (max. 30 seconden)?</Typography>
                {selectedWs && (<>
                    <RadioGroup words={selectedWs} />
                </>)}
            </Box>
        </>
    )
}

export default PageFive;