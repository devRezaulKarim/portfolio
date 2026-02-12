import { Hero } from "./components/header/Hero";
import { Header } from "./components/header/Header";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Works } from "./components/sections/Works.tsx";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}
