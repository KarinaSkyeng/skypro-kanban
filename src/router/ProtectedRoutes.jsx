import { Navigate, Outlet } from "react-router-dom"

import { routes } from "./routes";

export const ProtectedRoutes = ({isAuth}) => {
    
    return isAuth ? <Outlet /> : <Navigate to={routes.login} />
}