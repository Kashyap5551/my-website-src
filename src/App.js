import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ScrollToTop } from "./components/ScrollToTop";


export default function App() {
  

  
    return (
      <div>
        <div className="App">
          <main className="text-gray-900 bg-white dark:text-white dark:bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <ScrollToTop />
          </main>
          </div>
      </div>
    );
}
