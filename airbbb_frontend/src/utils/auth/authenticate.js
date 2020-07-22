import axios from "axios";

const authenticate = async () => {
  let auth = { isAuth: false, email: "" };

  await axios
    .get("http://localhost:3000/api/v1/auth/logged_in", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      auth = { isAuth: res.data.logged_in, email: res.data.email };
      return auth;
    })
    .catch((err) => console.log(err));
  return auth;
};

export default authenticate;
