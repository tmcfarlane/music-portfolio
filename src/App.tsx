import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shows from "./pages/shows/shows";
import Videos from "./pages/videos/videos";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import MusicPlayer from "./pages/tracks/musicplayer";
import { useState } from "react";

function App() {
  const [isTrackListVisible, setIsTrackListVisible] = useState(false);

  const closeTrackList = () => {
    setIsTrackListVisible(false);
  };

  const toggleTrackList = () => {
    setIsTrackListVisible(!isTrackListVisible);
  };

  return (
    <>
      <NavBar closeTrackList={closeTrackList} />
      <Home />
      <About />
      <Shows />
      <Videos />
      <Contact />
      <Footer />
      <MusicPlayer
        isTrackListVisible={isTrackListVisible}
        toggleTrackList={toggleTrackList}
      />
    </>
  );
}

export default App;
