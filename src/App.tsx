import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shows from "./pages/shows/shows";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Shows />
      <Contact />
    </>
  );
}

export default App;
