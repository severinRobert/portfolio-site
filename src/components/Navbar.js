import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-titles"> Home </Link>
      <Link to="/CV" className="nav-titles"> CV </Link>
      <Link to="/ProfessionnalProject" className="nav-titles"> Projet Professionnel </Link>
      <Link to="/Portfolio" className="nav-titles"> Portfolio </Link>
    </div>
  );
}

export default Navbar;