"use client";

import localFont from "next/font/local";
import "./navbar.css";
import Image from "next/image";

// const DMSans = localFont({
//   src: "fonts/DMSans_18pt-Regular.ttf"
// })

export default function NavBar() {
  return (
    <nav className={`navbar`}>
      <a href="/"><Image src="/my-notion-face-transparent.png" alt = "notion avatar" width={60} height={60}/></a>
      <ul>
        <li> <a href="/projects">Projects</a> </li>
        <li> <a href="/extracurriculars">Extracurriculars</a> </li>
        <li> <a href="/techstack">Tech Stack</a> </li>
        <li> <a href="/contact">Contact Me!</a> </li>
      </ul>
    </nav>
  );
}
