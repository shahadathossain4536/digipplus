import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyJobs from "./Pages/MyJobs/MyJobs";
import MyOfferLetter from "./Pages/MyOfferLetter/MyOfferLetter";
import MyPayment from "./Pages/MyPayment/MyPayment";
import Jobs from "./Pages/MyJobs/Jobs";
import JobApplication from "./Pages/MyJobs/JobApplication";
import ApplicationStatus from "./Pages/MyJobs/ApplicationStatus";
import MyBankDetails from "./Pages/MyPayment/MyBankDetails";
import Invoices from "./Pages/MyPayment/Invoices";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-jobs" element={<MyJobs />}>
          <Route index element={<Jobs />}></Route>
          <Route path="job-application" element={<JobApplication />}></Route>
          <Route
            path="application-status"
            element={<ApplicationStatus />}
          ></Route>
        </Route>
        <Route path="/my-offer-letter" element={<MyOfferLetter />} />
        <Route path="/my-payment" element={<MyPayment />}>
          <Route index element={<MyBankDetails />}></Route>
          <Route path="invoices" element={<Invoices />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
