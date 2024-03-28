import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [aboutData, setAboutData] = useState(null);
  const [factsData, setFactsData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Fetch about data from about.json
    fetch("/data/about.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching about data:", error));

    // Fetch facts data from facts.json
    fetch("/data/facts.json")
      .then((response) => response.json())
      .then((data) => setFactsData(data))
      .catch((error) => console.error("Error fetching facts data:", error));

    // Fetch contacts data from contact.json
    fetch("/data/contact.json")
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error("Error fetching contact data:", error));

    // Fetch skill data from skill.json
    fetch("/data/skill.json")
      .then((response) => response.json())
      .then((data) => setSkillData(data))
      .catch((error) => console.error("Error fetching skill data:", error));

    // Fetch resume data from resume.json
    fetch("/data/resume.json")
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((error) => console.error("Error fetching resume data:", error));

    // Fetch portfolio data from portfolio.json
    fetch("/data/portfolio.json")
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error("Error fetching portfolio data:", error));

    // Fetch services data from services.json
    fetch("/data/services.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.error("Error fetching services data:", error));

    // Fetch header data from header.json
    fetch("/data/header.json")
      .then((response) => response.json())
      .then((data) => setHeaderData(data))
      .catch((error) => console.error("Error fetching header data:", error));

    // Fetch footer data from footer.json
    fetch("/data/footer.json")
      .then((response) => response.json())
      .then((data) => setFooterData(data))
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  return (
    <DataContext.Provider
      value={{
        aboutData,
        factsData,
        contactData,
        skillData,
        resumeData,
        portfolioData,
        servicesData,
        headerData,
        footerData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
