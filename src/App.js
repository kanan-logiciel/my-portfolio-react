// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import About from "./components/About";
import Facts from "./components/Facts";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const USER_PROFILE = {
  name: "Kanan",
  age: 22,
  state: "ludhiana",
};
function App() {
  // const [count, setCount] = useState(0);
  // const updateCount = () => {
  //   setCount(count + 1)
  // }

  return (
    <div className="App container">
      {/* <UserProfile name="Kanan" count={count} updateCount={updateCount} /> */}
      {/* <UserProfile {...USER_PROFILE} /> */}
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
