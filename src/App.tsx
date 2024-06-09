import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Shows from "./pages/shows/shows";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Shows />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
