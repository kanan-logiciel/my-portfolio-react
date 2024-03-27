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

import aboutData from "./data/about.json";
import factsData from "./data/facts.json";
import skillData from "./data/skill.json";
import resumeData from "./data/resume.json";
import portfolioData from "./data/portfolio.json";
import servicesData from "./data/services.json";
import contactData from "./data/contact.json";
import footerData from "./data/footer.json";
import headerData from "./data/header.json";

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
      <Header data={headerData} />
      <About data={aboutData} />
      <Facts data={factsData} />
      <Skill data={skillData} />
      <Resume data={resumeData} />
      <Portfolio data={portfolioData} />
      <Services data={servicesData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </div>
  );
}

export default App;
