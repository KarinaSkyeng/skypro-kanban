import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes";
import { useUserContext } from "../context/useUserContext";

export const ProtectedRoutes = () => {
    const {user} = useUserContext();

    const isAuthenticated = user && user.token;

    return isAuthenticated ? <Outlet /> : <Navigate to={routes.login} />
};