"use client";

import { useEffect, useState } from "react";
import "./navbar.css";
import Image from "next/image";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 80) {
        setHidden(true); 
      } else {
        setHidden(false); 
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <a href="/">
        <Image src="/my-notion-face-transparent.png" alt="notion avatar" width={60} height={60} />
      </a>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#extracurriculars">Extracurriculars</a></li>
        <li><a href="#techstack">Tech Stack</a></li>
        <li><a href="mailto:qaziayn@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me!</a></li>
      </ul>
    </nav>
  );
}
