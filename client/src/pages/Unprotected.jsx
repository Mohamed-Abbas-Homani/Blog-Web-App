import { useEffect } from "react";
import { useToken } from "../services/store";
import AuthorizedPage from "./AuthorizedPage";

const Unprotected = ({ children }) => {
  const auth = useToken();
  if (!auth) return children;
  else return <AuthorizedPage />;
};
export default Unprotected;
