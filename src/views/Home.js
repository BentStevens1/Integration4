import Camera from '../components/Camera';
import AddVideo from '../components/AddVideo';
import {Grid, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <Grid className="App"  >
    <Grid >
      <Item xs={1}>
         <Camera sx={{ zIndex: "tooltip"}} />
      </Item>
        </Grid>
    <Grid className="App"  >
      <Item xs={1}>
         <AddVideo sx={{ zIndex: "modal"}}  />
      </Item>
       </Grid>
    </Grid>
  );
}

export default Home;
