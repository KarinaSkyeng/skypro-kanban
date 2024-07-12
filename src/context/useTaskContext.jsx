import { useContext } from "react"
import { TaskContext } from "./TasksContext"

export const useTaskContext = () => {
    return useContext(TaskContext);
};