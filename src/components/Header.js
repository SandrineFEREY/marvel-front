import { useNavigate } from "react-router-dom";
import logo from "../images/logo-marvel.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h2>Personnages</h2>
      <h2>Favoris</h2>
      <h2>Comics</h2>
    </div>
  );
};

export default Header;
