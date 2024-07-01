import { Navigate, Outlet } from "react-router-dom"

import { routes } from "./routes";

export const ProtectedRoutes = ({user}) => {
    
    return user ? <Outlet /> : <Navigate to={routes.login} />
}