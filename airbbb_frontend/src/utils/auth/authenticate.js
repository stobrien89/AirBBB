import axios from "axios";

const authenticate = async () => {
  let loggedIn = false;

  await axios
    .get("http://localhost:3000/api/v1/auth/logged_in", {
      withCredentials: true,
    })
    .then((res) => {
      loggedIn = res.data.logged_in;

      return true;
    })
    .catch((err) => console.log(err));

  return loggedIn;
};

export default authenticate;
