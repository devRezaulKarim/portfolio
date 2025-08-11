import "./App.css";
import SectionsContainer from "./components/sections/SectionsContainer";
import { ConeIcon } from "./components/custom-svgs/cone-icon";
import { FacebookIcon } from "./components/custom-svgs/facebook-icon";
import { LinkedinIcon } from "./components/custom-svgs/linkedin-icon";
import { TwitterIcon } from "./components/custom-svgs/twitter-icon";

function App() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute top-2 left-2 z-50 md:top-3.5 md:left-3.5 lg:top-5 lg:left-5">
        <ConeIcon color="#bdc3c7" />
      </div>
      <SectionsContainer />
      <div className="pointer-events-none absolute right-2 bottom-2 z-50 md:right-3.5 md:bottom-3.5 lg:right-5 lg:bottom-5">
        <div className="social-icons absolute right-6 bottom-6 flex items-center gap-x-2 lg:right-8 lg:bottom-8">
          <a href="#">
            <FacebookIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
          </a>
          <a href="#">
            <LinkedinIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
          </a>
          <a href="#">
            <TwitterIcon className="w-6 duration-200 hover:scale-90 sm:w-8" />
          </a>
        </div>
        <ConeIcon className="rotate-180" color="#bdc3c7" />
      </div>
    </main>
  );
}

export default App;
