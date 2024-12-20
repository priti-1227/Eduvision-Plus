import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navabar/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
    <Navbar />
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </Router>
  <Footer/>
  </>
  );
};

export default App;
