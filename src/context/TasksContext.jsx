import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
         // Загрузка задач из localStorage при загрузке приложения
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        // Сохранение задач в localStorage при изменении tasks
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

      return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
          {children}
        </TaskContext.Provider>
      ); 
};
