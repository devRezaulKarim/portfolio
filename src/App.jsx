import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <div className="flex">
        <div className="grow bg-[var(--color-secondary)] min-h-screen">
          <Outlet />
        </div>
        <Navbar />
      </div>
    </>
  );
}
