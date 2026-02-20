import React from "react";
import { Navbar } from "./Navbar";
import { SpacerPattern } from "../common/SpacerPattern";
import { Hero } from "./Hero";

export default function Header() {
  return (
    <>
      <Navbar />
      <SpacerPattern />
      <Hero />
    </>
  );
}
