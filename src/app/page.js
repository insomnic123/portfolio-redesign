"use client"

import Image from "next/image";
import localFont from "next/font/local";
import { useState, useEffect, useRef } from 'react';
import NavBar from "./navbar/navbar";
import ProjectCarousel from "./projcarosel/carousel"; // Renamed to avoid conflict
import { Github, Linkedin, Mail } from 'lucide-react';
import VanillaTilt from "vanilla-tilt";
import ExtracurricularSection from "./ecs/extracurriculars";
import TechStack from "./techstack/techstack";

const Ahsing = localFont({
  src: "fonts/Ahsing.ttf"
});
const DMSans = localFont({
  src: "fonts/DMSans_18pt-Regular.ttf"
});

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  const tiltRef = useRef(null);

  const dynamicWords = [
    "an aspiring computer engineer",
    "a passionate creator", 
    "a creative designer and developer",
    "an aspiring entrepreneur",
    "a lifelong learner",
    "a vibe coder",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = dynamicWords[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypeSpeed(50); 
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypeSpeed(40); 
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } 
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typeSpeed, dynamicWords]);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 7,
        speed: 200,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[url('/flower.png')] bg-repeat bg-[length:960px_540px] relative">
      <div className="w-full fixed top-0 left-0 z-20">
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center w-full max-w-7xl mx-auto gap-6 px-4 sm:px-6 md:px-12 pt-24 md:pt-0 md:min-h-screen">
        <div className="w-full md:w-1/2 md:ml-20 backdrop-blur-md bg-white/30 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl z-10 max-w-xl">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${Ahsing.className}`}>
            Hey There!
          </h1>
          <p className={`text-gray-800 text-base sm:text-lg leading-relaxed ${DMSans.className}`}>
            My name is Qazi, and I am a student starting G12 in the fall of 2025 at Danforth CTI in Toronto!
            I am{' '}
            <span className="text-purple-600 font-semibold">
              {currentWordIndex === 5 ? (
                <s>{currentText}</s> 
              ) : (
                currentText 
              )}
            </span>
            <span className="animate-pulse text-blue-600">|</span>
            {' '}who is looking to constantly grow and learn new things! I've been
            <strong> coding since grade six</strong>, and have slowly been building my skills as both a <strong>programmer, designer</strong>, and
            <strong> aspiring entrepreneur</strong>. Outside of programming, I really enjoy <strong>learning new things</strong>, whether it's <strong>astronomy</strong>,
            <strong> learning an instrument</strong>, <strong>playing sports</strong>, etc! Keep scrolling to find out more :) <em>(psst website is still under construction btw)</em>
          </p>
          <div className="flex items-center gap-4 mb-0 mt-4 ">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">Connect with me!:</span>
            </div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/qaziayan/" target="_blank" rel="noopener noreferrer">
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </button> 
              </a>
              <a href="https://github.com/insomnic123" target="_blank" rel="noopener noreferrer">
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                  <Github className="w-5 h-5 text-black group-hover:text-gray-300" />
                </button> 
              </a>
              <a href="mailto:qaziayn@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                  <Mail className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                </button> 
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div ref={tiltRef} className="w-3/4 sm:w-[300px] md:w-full max-w-[400px] rounded-xl">
            <Image
              src="/meyay.png"
              alt="Photo of me!"
              width={400}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      <div id="projects">
        <ExtracurricularSection />
      </div>
      <div id="extracurriculars" className="w-full flex justify-center mt-0">
        <ProjectCarousel />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
    </div>
  );
}