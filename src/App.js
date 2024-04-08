import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Facts from "./components/Facts";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container">
      <Header />
      <About />
      <Facts />
      <Skill />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
