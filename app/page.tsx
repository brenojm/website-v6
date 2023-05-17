import React from "react";
import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Landing />
      <About />
    </>
  );
}
