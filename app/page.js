"use client";
import Usernavbar from "@/components/Usernav";
import Introduction from "@/Screens/Introduction";
import Projects from "@/Screens/Projects";
import Certificates from "@/Screens/Certificates";
import Contact from "@/Screens/Contact";
import { useState } from "react";
export default function Home() {
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleScroll = () => {
    setScroll(true);
    setOpenMenu(false);
    setTimeout(() => {
      setScroll(false);
    }, 1200);
  };

  return (
    <main className="">
      {/* Navbar */}
      <div
        className={`sticky md:block z-10 ${
          scroll
            ? "-translate-y-10 md:-translate-y-0 "
            : "-translate-y-0 md:-translate-y-0"
        }  duration-500   `}
      >
        <Usernavbar menu={openMenu} setMenu={setOpenMenu} />
      </div>

      {/* Screens */}
      <div
        onScroll={handleScroll}
        className="h-screen overflow-auto  !scroll-smooth"
      >
        <Introduction />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </main>
  );
}
