import axios from "axios";

const authenticate = async () => {
  let auth = { isAuth: false, email: "" };

  await axios.get("/api/v1/auth/me", { withCredentials: true }).then((resp) => {
    auth = { isAuth: resp.data.logged_in, email: resp.data.email };
    return auth;
  });
  return auth;
};

export default authenticate;
