import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={<div className="w-[100vw] h-[100vh]">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
