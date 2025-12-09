import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayouts() {
  return (
    <>
      <Navbar />
      <main className="grow container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayouts;
