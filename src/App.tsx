import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shows from "./pages/shows/shows";
import Videos from "./pages/videos/videos";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import MusicPlayer from "./pages/tracks/musicplayer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Shows />
      <Videos />
      <Contact />
      <Footer />
      <MusicPlayer />
    </>
  );
}

export default App;
