import "./App.css";
import SectionsContainer from "./components/sections/SectionsContainer";
import { ConeIcon } from "./components/custom-svgs/cone-icon";

function App() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute top-2 left-2 z-50 md:top-3.5 md:left-3.5 lg:top-5 lg:left-5">
        <ConeIcon color="#ff0000" />
      </div>
      <SectionsContainer />
      <div className="pointer-events-none absolute right-2 bottom-2 z-50 md:right-3.5 md:bottom-3.5 lg:right-5 lg:bottom-5">
        <ConeIcon className="rotate-180" color="#0000ff" />
      </div>
    </main>
  );
}

export default App;
