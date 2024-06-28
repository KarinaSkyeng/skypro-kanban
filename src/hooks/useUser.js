
import { useState } from "react";

export const useUser = () => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        // Логика входа пользователя
        setUser(userData);
    };

    const logout = () => {
        // Логика выхода пользователя
        setUser(null);
        localStorage.removeItem("user");
    };

    return { user, login, logout, setUser };
};
