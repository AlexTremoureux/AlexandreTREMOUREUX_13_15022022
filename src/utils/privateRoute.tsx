import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth: boolean = useAuth();
    if (!auth) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  