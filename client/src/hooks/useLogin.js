import { useNavigate } from "react-router-dom";
import { useSetLogin } from "../services/store";

const useLogin = () => {
  const setLogin = useSetLogin()
  const navigate = useNavigate()
  return async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      setLogin(loggedIn.userID, loggedIn.token);
      navigate("/")
    }
  };
};

export default useLogin;
