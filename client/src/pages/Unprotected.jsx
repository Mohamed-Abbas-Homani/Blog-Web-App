import { useEffect } from "react";
import { useToken } from "../services/store";
import { useNavigate } from "react-router-dom";

const Unprotected = ({ children }) => {
  const auth = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) navigate(-1);
  }, [auth]);
  return !auth && children;
};
export default Unprotected;
