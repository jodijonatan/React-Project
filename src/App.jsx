import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import Home from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FAQPage from "./pages/FAQPage";
import SyaratPage from "./pages/SyaratPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/syaratketen" Component={SyaratPage} />
      </Routes>

      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
