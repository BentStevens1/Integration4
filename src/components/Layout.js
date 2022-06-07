import {
    Outlet,
  } from "react-router-dom";
  import { Box, CssBaseline } from "@mui/material";
  import Camera from "./Camera";
  
  const Layout = () => {
  
    return (<Box sx={{ width:'100vh', height:'100vh', backgroundColor: '#000', overflowY: 'hidden', overflowX: 'hidden'}}>
      <CssBaseline />
      <Box component="main" sx={{position: 'absolute',  zIndex: "1", overflowX: 'hidden'}}>
        <Outlet />
      </Box>
      <Camera sx={{position: 'fixed', zIndex: "-1", overflowY: 'hidden' }} />
    </Box >);
  }
  
  export default Layout;