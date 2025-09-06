import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import TimerInput from "./components/Timer/TimerInput";
import ThermostatPage from "./components/Thermostat/ThermostatPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/achievements" element={<Layout><Achievements /></Layout>} />
        <Route path="/thermostat" element={<Layout><ThermostatPage /></Layout>} />
        <Route path="/timer" element={<Layout><TimerInput /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
