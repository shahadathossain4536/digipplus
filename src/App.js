import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyJobs from "./Pages/MyJobs/MyJobs";
import MyOfferLetter from "./Pages/MyOfferLetter/MyOfferLetter";
import MyPayment from "./Pages/MyPayment/MyPayment";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/my-offer-letter" element={<MyOfferLetter />} />
        <Route path="/my-payment" element={<MyPayment />} />
      </Routes>
    </div>
  );
}

export default App;
