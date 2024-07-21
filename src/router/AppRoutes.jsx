import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
import { NotFound } from "../Pages/NotFound/NotFound.jsx";
import { MainPage } from "../Pages/MainPage/MainPage.jsx";
import { LoginPage } from "../Pages/LoginPage/LoginPage.jsx";
import { Register } from "../Pages/Register/Register.jsx";
import { ProtectedRoutes } from "./ProtectedRoutes.jsx";
import { ExitPage } from "../Pages/ExitPage/ExitPage.jsx";
import { CardPage } from "../Pages/CardPage/CardPage.jsx";
//import { UserProvider } from "../context/UserContext.jsx";
import { NewCardPage } from "../Pages/AddCardPage/AddCardPage.jsx";
//import { PopBrowse } from "../../components/PopBrowse/PopBrowse.jsx";


export const AppRoutes = ({ isDarkTheme, setIsDarkTheme }) => {
    return (
        // <UserProvider>
            //<BrowserRouter>               
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route 
                            path={routes.main} 
                            element={
                                <MainPage 
                                    isDarkTheme={isDarkTheme} 
                                    setIsDarkTheme={setIsDarkTheme}
                                /> } >
                            <Route path={routes.exit} element={<ExitPage />} />
                            <Route path={routes.card} element={<CardPage />} />
                            <Route path={routes.addNew} element={<NewCardPage />} />
                        </Route>
                    </Route>
                    <Route path={routes.login} element={<LoginPage />} />
                    <Route path={routes.register} element={<Register />} />
                    <Route path={routes.notFound} element={<NotFound />} />
                </Routes>
            //</BrowserRouter>
        // </UserProvider>
    );
};
