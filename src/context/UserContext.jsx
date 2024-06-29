import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch (_) {
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

