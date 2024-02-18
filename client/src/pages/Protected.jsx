import { useEffect } from "react";
import { useToken } from "../services/store";
import NotAuthorizedPage from "./NotAuthorizedPage";

const Protected = ({ children }) => {
  const auth = useToken();
  if(auth)
  return children
  else
  return <NotAuthorizedPage />
};
export default Protected;
