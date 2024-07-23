import { createContext, useEffect, useState, useContext} from "react";

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

      const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

      return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
          {children}
        </TaskContext.Provider>
      );
};

export const useTask = () => useContext(TaskContext);