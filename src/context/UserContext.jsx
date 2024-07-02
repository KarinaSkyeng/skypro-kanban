import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.token ? user : null; // Проверка на наличие токена
  } catch (_) {
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
