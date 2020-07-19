import React, { Component, createContext } from "react";
import axios from "axios";
import axioshelper from "../utils/axios/axioshelper";
import authenticate from "../utils/auth/authenticate";

const AuthContext = createContext();

class AuthProvider extends Component {
  state = { isAuth: false, email: "" };

  componentDidMount() {
    authenticate()
      .then((resp) => this.setState({ ...resp }))
      .catch((err) => console.log(err));
  }

  login = (user, props, event) => {
    event.preventDefault();

    axioshelper();
    axios
      .post("/api/v1/auth", { user: { ...user } }, { withCredentials: true })
      .then((res) => {
        this.setState({ isAuth: true });
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  signup = (user, props, event) => {
    event.preventDefault();

    axioshelper();
    axios
      .post(
        "/api/v1/registrations",
        { user: { ...user } },
        { withCredentials: true }
      )
      .then((resp) => {
        this.setState({ isAuth: true });
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  logout = (event) => {
    event.preventDefault();

    axioshelper();
    axios
      .delete("/api/v1/auth/logout")
      .then((res) => {
        this.setState({ isAuth: false });
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          email: this.state.email,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          forgotPass: this.forgotPass,
          resetPass: this.resetPass,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
