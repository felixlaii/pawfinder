import { Link } from "react-router-dom";
import "./pageHeader.scss";
import SignUp from "../../pages/SignUp/SignUp";
import SearchBar from "../../components/SearchBar/SearchBar";

import React, { useState } from "react";

function PageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="page-header">
      <nav className="page-header__nav">
        <ul className="page-header__list">
          <Link to="/">
            <li className="page-header__item">home</li>
          </Link>
          <Link to="/results">
            <li className="page-header__item">results</li>
          </Link>

          <Link to="/account">
            <li className="page-header__item">account</li>
          </Link>
          <div className="page-header__modal">
            <li onClick={togglePopUp} className="page-header__item">
              sign in & sign up
            </li>
            {isOpen && <SignUp />}
          </div>
            <li className="page-header__item">  <SearchBar /> </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageHeader;
