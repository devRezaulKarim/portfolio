import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <div className="flex">
        <div className="grow bg-[var(--color-primary)] min-h-screen text-[var(--color-light)]">
          <div className="max-w-screen-lg mx-auto">
            <Outlet />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
}
