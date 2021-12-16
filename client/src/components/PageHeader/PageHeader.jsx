import { Link } from "react-router-dom";
import "./pageHeader.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import PawLogo from "../../assets/logos/PawLogo.png";

function PageHeader() {
  return (
    <div className="page-header">
      <nav className="page-header__nav">
        <ul className="page-header__list">
          <Link to="/">
            <img className="page-header__logo" src={PawLogo} alt="page logo" />
          </Link>
          <Link to="/">
            <li className="page-header__item">home</li>
          </Link>

          <li className="page-header__item--divider">/</li>

          <Link to="/dashboard">
            <li className="page-header__item">account</li>
          </Link>

          <li className="page-header__item--divider">/</li>

          <Link to="/login">
            <li className="page-header__item">sign in</li>
          </Link>

          <li className="page-header__item--divider">/</li>

          <Link to="/signup">
            <li className="page-header__item">sign up</li>
          </Link>

          <li className="page-header__item--divider">/</li>

          <Link to="/gallery">
            <li className="page-header__item">search</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default PageHeader;
