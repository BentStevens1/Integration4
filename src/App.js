import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import PageOne from "./views/PageOne";
import PageTwo from "./views/PageTwo";
import PageThree from "./views/PageThree";
import VideoOverview from "./views/VideoOverview";
import VideoDetail from "./views/VideoDetail";
import VideoRecorder from "./views/VideoRecorder";
import PageFour from "./views/PageFour";

function App() {
  return (
    // <RecordVideo />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path='/home/*' element={<Home />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/VideoOverview" element={<VideoOverview />} />
        <Route path="/VideoOverview/:videoId" element={<VideoDetail/>}/>
        <Route path="/PageFour" element={<PageFour/>}/>
      </Route>
      <Route path="/VideoRecorder" element={<VideoRecorder />} />
    </Routes>
  );
}

export default App;