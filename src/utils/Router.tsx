import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { logged } from "../app/features/loggedSlice";
import Page404 from "../components/Page404";
import HomePage from "../container/HomePage";
import SignIn from "../container/SignIn";
import User from "../container/User";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth: boolean = useAuth();
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
}

function useAuth(): boolean {
  const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem("Bearer") !== null;
  if (isAuthenticated) {
    dispatch(logged(true));
  }
  return isAuthenticated
}

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



/*
interface Props {
  component: React.ComponentType;
  path?: string;
}
export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem("Bearer") !== null;
  if (isAuthenticated) {
    dispatch(logged(true));
    return <RouteComponent />;
  }
  return <Navigate to="/" />;
};
*/