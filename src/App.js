import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import React, { useEffect } from "react";
import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion';
import { Element } from 'react-scroll';


const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const App = () => {

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate `radial-gradient(50% 50% at 50% 50%, #020617 75%, ${color})`;
  //const contentBackground = useMotionTemplate `linear-gradient(120deg, black, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
    });
  }, []);

  return (
      <section className = "website">
        <motion.section style={{backgroundImage}}>
          <Element name="nav">
            <Navbar/>
          </Element>
          <Home/>
          <Element name="about">
            <About/>
          </Element>
          <Element name="skills">
            <Skills/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Footer/>
        </motion.section>
      </section>
  );
}

export default App;
