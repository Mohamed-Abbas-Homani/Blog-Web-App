import { useEffect } from "react";
import { useToken } from "../services/store";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const auth = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) navigate("/login");
  }, [auth]);
  return auth && children;
};
export default Protected;