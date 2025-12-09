import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Supports only weight 400
import "@fontsource-variable/roboto-flex";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
  </>
);
