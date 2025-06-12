import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import WeeklyAdPage from "./pages/WeeklyAdPage";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/weekly" element={<WeeklyAdPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;