import { Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
import { Typography, Button, Box} from '@mui/material';
import { Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
      <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-around'}}>
          <Typography>...Video...</Typography>
          
          <Link to={`/pageOne`}><Button variant="contained" color="secondary" sx={{padding: "1rem 4rem", margin:"2rem"}}>Verder</Button></Link>
      </Box>

    
  );
}

export default Home;
