
import { useState } from "react";

const getUserFromLocalStorage = () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user && user.token ? user : null; // Проверка на наличие токена
    } catch (_) {
      return null;
    }
  };

export const useUser = () => {
    const [user, setUser] = useState(getUserFromLocalStorage());

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


