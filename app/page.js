"use client";

import Image from "next/image";
import Usernavbar from "@/components/Usernav";
import Introduction from "@/Screens/Introduction";
import Projects from "@/Screens/Projects";
import Certificates from "@/Screens/Certificates";
import Contact from "@/Screens/Contact";
export default function Home() {
  return (
    <main className="">
      {/* Navbar */}

      <Usernavbar />

      {/* Screens */}
      <Introduction />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
