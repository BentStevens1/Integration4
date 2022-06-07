import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Form from "./views/Form";
import PageOne from "./views/PageOne";
import PageTwo from "./views/PageTwo";
import PageThree from "./views/PageThree";
import VideoOverview from "./views/VideoOverview";
import VideoRecorder from "./views/VideoRecorder";

import RecordVideo from "./components/RecordVideo";

function App() {
  return (
    // <RecordVideo />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path='/home/*' element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/VideoOverview" element={<VideoOverview />} />
        {/* <Route path="/home/:postId" element={<Post/>} />
        <Route path="/r/:subredditId" element={<SubredditDetail/>}/>
        <Route path="/u/:userId" element={<UserDetail/>}/> */}
      </Route>
      <Route path="/VideoRecorder" element={<VideoRecorder />} />
    </Routes>
  );
}

export default App;