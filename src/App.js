import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BotPage from "./pages/BotPage";
import Context from "./Context";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <>
      <Context>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/page2" element={<BotPage />} />
            <Route path="/page3" element={<FinalPage />} />
          </Routes>
        </Router>
      </Context>
    </>
  );
}

export default App;
