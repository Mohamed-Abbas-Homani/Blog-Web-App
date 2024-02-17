import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import Protected from "../pages/Protected";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Unprotected from "../pages/Unprotected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <HomePage />
      </Protected>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Unprotected><LoginPage /></Unprotected>,
  },
  {
    path: "/signup",
    element: <Unprotected><SignUpPage /></Unprotected>,
  },
  {
    path: "/profiles/:profileId",
    element: <ProfilePage />,
  },
]);

export default router;
