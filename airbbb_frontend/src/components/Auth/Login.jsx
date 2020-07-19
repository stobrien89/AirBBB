import React, { useState, useEffect } from "react";
import axios from "axios";
import Authenticate from "../../utils/auth/authenticate";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    if (Authenticate()) props.history.push("/");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/v1/auth", { user: { ...user } }, { withCredentials: true })
      .then((res) => props.history.push("/"))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="email"
        value={user.email}
        name="email"
      />
      <input
        onChange={handleChange}
        type="password"
        value={user.password}
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
