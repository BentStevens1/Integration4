import { Typography, Box, Button } from '@mui/material';
import CheckboxesGroup from '../components/SelectWords';
import { useQuery } from "react-query";
import { Link} from "react-router-dom";

const backendUrl = process.env.REACT_APP_BACKEND_URL;


function PageTwo2(){
    
    const { isLoading, data: words } = useQuery("words", async () => {
    const data = await fetch(`${backendUrl}/api/words?populate=*`).then(r => r.json());
    console.log(data);
    return data;
  });

  const videoid = 3;


  console.log(words);
    var style= {
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
            <Box sx={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column' , alignItems: 'center', justifyContent: 'space-around'}}> 
                <Typography color="secondary" sx={{ typography: "h3", width: "60rem", textAlign: "center", marginTop: "-5rem"}} >Selecteer de term die het meest wordt gebruikt in jouw omgeving:</Typography>
                {words && (<>
               {/* <CheckboxesGroup words={words} /> */}
               </>)}
               <Link to={`/pageThree-w/${videoid}`}><Button>Volgende</Button></Link>

            </Box>
        </>
    )
}

export default PageTwo2;


