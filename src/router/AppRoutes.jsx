import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import { NotFound } from "../Pages/NotFound/NotFound.jsx";
import { MainPage } from "../Pages/MainPage/MainPage.jsx";
import { LoginPage } from "../Pages/LoginPage/LoginPage.jsx";
import { Register } from "../Pages/Register/Register.jsx";
import { ProtectedRoutes } from "./ProtectedRoutes.jsx";
import { useState } from "react";
import { ExitPage } from "../Pages/ExitPage/ExitPage.jsx";
import { CardPage } from "../Pages/CardPage/CardPage.jsx";
    
export const AppRoutes = ({isDarkTheme, setIsDarkTheme}) => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoutes isAuth={isAuth}/>}>
                    <Route path={routes.main} element={<MainPage isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />}>
                        <Route path={routes.exit} element={<ExitPage setIsAuth={setIsAuth} />} />
                        <Route path={routes.card} element={<CardPage />} />
                    </Route>
                </Route>
                <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth} />} />
                <Route path={routes.register} element={<Register/>} />
                <Route path={routes.notFound} element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}