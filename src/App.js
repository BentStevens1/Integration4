import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import PageOne from "./views/PageOne";
import PageTwo from "./views/PageTwo";
import PageTwo2 from "./views/PageTwo-w";
import PageThree from "./views/PageThree";
import PageThree2 from "./views/PageThree-w";
import VideoOverview from "./views/VideoOverview";
import VideoDetail from "./views/VideoDetail";
import VideoRecorder from "./views/VideoRecorder";
import PageFour from "./views/PageFour";
import PageFour2 from "./views/PageFour-w";
import PageFive2 from "./views/PageFive-w";
import PageFive from "./views/PageFive";
import PageSix2 from "./views/PageSix-w";
import End from "./views/End";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagetwo-w" element={<PageTwo2 />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/pagethree-w/:videoId" element={<PageThree2 />} />
        <Route path="/VideoOverview" element={<VideoOverview />} />
        <Route path="/VideoOverview/:videoId" element={<VideoDetail/>}/>
        <Route path="/PageFour" element={<PageFour/>}/>
        <Route path="/PageFour-w" element={<PageFour2/>}/>
        <Route path="/PageFive/:ids" element={<PageFive/>}/>
        <Route path="/PageFive-w" element={<PageFive2/>}/>
        <Route path="/PageSix-w" element={<PageSix2/>}/>
        <Route path="/End" element={<End/>}/>
      </Route>
      <Route path="/VideoRecorder" element={<VideoRecorder />} />
    </Routes>
  );
}

export default App;