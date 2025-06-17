import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import NewHome from "./pages/NewHome"
import Technology from "./pages/Technology";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Team from "./pages/Team";
import Porfolio from "./pages/Porfolio";
function App() {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={<div className="w-[100vw] h-[100vh] flex justify-center items-center">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<NewHome />} />
          {/* <Route path="/technology" element={<Technology />} /> */}
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          {/* <Route path="/portfolio" element={<Porfolio />} /> */}
          <Route path="/team" element={<Team />} />          
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
