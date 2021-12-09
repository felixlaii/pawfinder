import axios from "axios";
import React, { Component } from "react";
import './userWelcome.scss'
import '../../styles/partials/_global.scss'


export default class UserWelcome extends Component {
  state = {
    isLoading: true,
    userInfo: {},
  };
  componentDidMount() {
    let token = sessionStorage.getItem("authToken");

    if (!!token) {
      axios
        .get(`http://localhost:8080/users/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.setState({
            userInfo: res.data,
            isLoading: false,
          });
          const userInfo = res.data;
        });
    } else {
      this.props.history.push("/login");
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("authToken");

    this.props.history.push("/login");
  };

  render() {
    const { isLoading, userInfo } = this.state;
    return isLoading ? (
      <h1 className="pawfinder__loading">ruff...no more pets, try again!</h1>
    ) : (
      <div className="user-welcome">
        <div className="user-welcome__container">
          <div className="user-welcome__header">
            <h1 className="user-welcome__title">
              welcome {userInfo.firstName} {userInfo.lastName}!
            </h1>
          </div>
          <div className="user-welcome__submit">
            <button
              className="user-welcome__button"
              onClick={this.handleLogOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}
