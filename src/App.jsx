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
      <div className="bg-gradient-to-r from-[var(--color-primary)] from-50%  to-[var(--color-secondary)] to-50%">
        <div className="flex max-w-screen-2xl mx-auto relative bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] customShadow">
          <div className="bg-[var(--color-primary)] text-[var(--color-light)] lg:w-full overflow-auto h-screen lg:p-8 p-4 ">
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
            {device < 767 && (
              <div
                className={`${
                  menuIsOpen ? "w-40" : "w-0"
                } overflow-hidden	duration-200 transition-all py-8 bg-[var(--color-secondary)] fixed top-2 right-2 rounded-lg rounded-tr-3xl mobileMenuNavBg z-40 flex items-center justify-center `}
              >
                <MobileNavbar mobileMenuHandler={mobileMenuHandler} />
              </div>
            )}
          </div>

          {/* <div className="bg-green-500 hidden md:block w-60 h-screen"></div> */}
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
