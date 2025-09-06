import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/thermostat">Thermostat</Link>
      <Link to="/timer">Timer</Link>
    </nav>
  );
};

export default Navbar;
