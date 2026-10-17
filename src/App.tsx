import React, { useEffect } from "react";
import Background from "./Components/Background";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import GamesSection from "./Components/GamesSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Old router links (#/about-me, #/contact) land on the matching section
const legacyHashes: Record<string, string> = { "#/about-me": "about", "#/contact": "contact", "#/": "top" };

const App: React.FC = () => {
  useEffect(() => {
    const target = legacyHashes[window.location.hash];
    if (target) document.getElementById(target)?.scrollIntoView();
  }, []);

  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Featured />
        <GamesSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
