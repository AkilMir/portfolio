import React from "react";
import '../App.css';
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "../assets/Lottie-Computer-Animation.json";
import {useEffect, useRef} from "react";
import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion';


const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const About = () => {

    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const contentBackground = useMotionTemplate `linear-gradient(120deg, black, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    
    const computerRef = useRef<LottieRefCurrentProps>(null)
    return (
        <motion.section
        style = {{
            contentBackground,
        }}
        className = "about"
        >
            <div className = "about-heading-container">
                <h1 className = "about-heading">
                    About Me
                </h1>
            </div>
            <div className = "about-passage-animation-container">
                <div className = "about-passage">
                    <p>Hello! My name is Akil Mir, and I'm a 20-year-old student with an unquenchable passion for Computer Science. Currently pursuing my undergraduate degree with a concentration in artificial intelligence, I'm on a journey towards mastery in this dynamic field. I've also charted a graduate pathway program, expecting to graduate with a master's degree in Computer Science by May 2026.</p>
                    <br></br>
                    <p>Beyond academics, I find immense joy in exploring the intricacies of algorithms, programming languages, and emerging technologies. Whether it's deciphering complex problems or crafting innovative solutions, I thrive on the challenges that computer science presents.</p>
                    <br></br>
                    <p>With each line of code I write, I'm driven by a desire to make meaningful contributions to the ever-evolving landscape of technology. Join me as I embark on this exhilarating adventure, fueled by curiosity, determination, and a relentless pursuit of knowledge.</p>
                </div>
                <div className = "about-animation">
                    <Lottie
                        className = "lottie-animation"
                        LottieRef = {computerRef}
                        animationData = {animationData}
                    />
                </div>
            </div>
            
        </motion.section>
    );
}

export default About