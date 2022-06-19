import RecordVideo from '../components/RecordVideo';
import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import useStore from '../store/Store';


function VideoRecorder() {
    const overlay = useStore(state => state.overlay);
    const setOverlay = useStore(state => state.setOverlay);

    return (
        <>
            <RecordVideo  />
            { overlay &&
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}> 
                    <Typography sx={{ color: "secondary.main", typography: "h3", textTransform: "uppercase", fontFamily: "Bebas Neue", marginTop: "4rem", zIndex: "1"}}>Jouw video</Typography>
                    <Typography sx={{ color: "secondary.main", typography: "h3", textTransform: "uppercase", fontFamily: "Bebas Neue", marginTop: "28rem", zIndex: "1" }}>Mogen wij jouw video delen met andere?</Typography>
                    <FormControl component="fieldset" variant="standard">
                        <FormGroup sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"2rem" }}>
                            <FormControlLabel 
                                control={
                                    <Checkbox name='one' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "1rem" }} />
                                }
                                label={<Typography sx={{ color: "secondary.main", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>De video mag gebruikt worden in deze installatie</Typography>}
                            />
                            <FormControlLabel  sx={{ marginTop: "2rem" }}
                                control={
                                    <Checkbox  name='two' sx={{ '& .MuiSvgIcon-root': { fontSize: 50 }, marginRight: "1rem" }} />
                                }
                                label={<Typography sx={{ color: "secondary.main", typography: "h4", textTransform: "uppercase", fontFamily: "Bebas Neue" }}>De video mag gebruikt worden op sociale media</Typography>}
                            />
                        </FormGroup>
                    </FormControl>
                </Box>
            }
        </>
    );
}

export default VideoRecorder;

