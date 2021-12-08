import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DashboardNav extends Component {
  render() {
    return (
      <div className="dashboard-nav">
        <div className="dashboard-nav__container">
          <div className="dashboard-nav__subnav">
            <nav className="dashboard-nav__nav">
              <ul className="dashboard-nav__list">
                <Link to="/dashboard/details">
                  <li className="dashboard-nav__items">Preferences</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
