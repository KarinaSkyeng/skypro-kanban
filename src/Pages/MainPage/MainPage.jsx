
import { useEffect, useState, useContext } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Wrapper, Loader } from "../../glogalStyle.styled.js";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";
import { useUserContext } from "../../context/useUserContext";
import { TaskContext } from "../../context/TasksContext.jsx";


export const MainPage = ({ setUser, isDarkTheme, setIsDarkTheme }) => {
    const { user} = useUserContext();
    const { tasks, setTasks } = useContext(TaskContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
       
    
      useEffect(() => { 
        console.log("user:", user);       
        if (!user || !user.token) {
          console.error("Пользователь не авторизован");
          setError("Пользователь не авторизован");
          setIsLoading(false);
          return;
        }

        setIsLoading(true);
        getTasks(user.token)
        .then((res) => {
          setTasks(res.tasks)         
        })
        .catch((error) => {
          console.log("Error loading tasks:", error.message);
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });        
      },[user, setTasks]);

      
   
    return (
        <Wrapper>
          <Outlet/>
            <Header 
              setUser={setUser} 
              setIsDarkTheme={setIsDarkTheme} 
              isDarkTheme={isDarkTheme} />
            {isLoading ? (
              <Loader>Данные загружаются...</Loader>
              ) : error ? 
              <p>{error}</p> : (
              <Main cards={tasks} />
              )}    
        </Wrapper>
    );
};