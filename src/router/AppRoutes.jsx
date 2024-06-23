import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import { NotFound } from "../Pages/NotFound/NotFound.jsx";
import { MainPage } from "../Pages/MainPage/MainPage.jsx";
import { LoginPage } from "../Pages/LoginPage/LoginPage.jsx";
import { Register } from "../Pages/Register/Register.jsx";
    
export const AppRoutes = ({isDarkTheme, setIsDarkTheme}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= {routes.main} element={<MainPage isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />} />
                <Route path= {routes.login} element={<LoginPage/>} />
                <Route path= {routes.register} element={<Register/>} />
                <Route path= {routes.notFound} element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}