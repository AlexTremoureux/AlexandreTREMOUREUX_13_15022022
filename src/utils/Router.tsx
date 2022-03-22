import { Route, Routes } from "react-router-dom";
import Page404 from "../components/Page404";
import HomePage from "../container/HomePage";
import SignIn from "../container/SignIn";
import User from "../container/User";
import { RequireAuth } from "./privateRoute";

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignIn />} />
      <Route
            path="/profile"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </>
);

export default Router;
