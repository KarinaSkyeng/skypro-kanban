import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes";
import { useUserContext } from "../context/useUserContext";

export const ProtectedRoutes = () => {
    const {user} = useUserContext()

    return user && user.token ? <Outlet /> : <Navigate to={routes.login} />
}