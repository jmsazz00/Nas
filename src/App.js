import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Proposal from "./components/proposal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <main>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="surp" element={<Proposal />} />
        </Routes>
      </main>
    </>
  );
}
// Dont forget to animate the project once done //

export default App;
