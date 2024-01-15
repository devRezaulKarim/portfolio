import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import MobileNavbar from "./Components/MobileNavbar";

export default function App() {
  const device = window.innerWidth;
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const mobileMenuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <div className="flex">
        <div className="bg-[var(--color-primary)] text-[var(--color-light)] lg:w-[calc(100vw-10rem)] w-screen overflow-auto h-screen lg:p-8 p-4 ">
          <div>
            <Outlet />
          </div>

          {/* mobile menu */}

          {device < 767 && (
            <div
              onClick={mobileMenuHandler}
              className="w-14 h-14 bg-[var(--color-accent)] fixed top-2 right-2 rounded-full mobileMenuBg z-50 flex items-center justify-center"
            >
              {menuIsOpen ? (
                <FaXmark className="text-4xl text-[var(--color-primary)]" />
              ) : (
                <FaBars className="text-3xl text-[var(--color-primary)]" />
              )}
            </div>
          )}
          {device < 767 && menuIsOpen && (
            <div className="w-40 py-8 bg-[var(--color-accent)] fixed top-2 right-2 rounded-full mobileMenuBg z-40 flex items-center justify-center">
              <MobileNavbar mobileMenuHandler={mobileMenuHandler} />
            </div>
          )}
        </div>

        <div className="bg-green-500 hidden lg:block w-40 h-screen"></div>
        <div>
          <Navbar />
        </div>
      </div>
    </>
  );
}
