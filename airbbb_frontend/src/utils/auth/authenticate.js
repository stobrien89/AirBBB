import axios from "axios";

const authenticate = async () => {
  let auth = { isAuth: false, email: "" };

  await axios
    .get("http://localhost:3000/api/v1/auth", { withCredentials: true })
    .then((res) => {
      auth = { isAuth: res.data.logged_in, email: res.data.email };
      return auth;
    });
  return auth;
};

export default authenticate;
