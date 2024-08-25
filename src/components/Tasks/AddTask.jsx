import { useState, useContext } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { TaskContext } from '../../context/TasksContext';
import { addTask as apiAddTask } from '../../api/tasks';
import Calendar from 'react-calendar';

export const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const { user } = useUserContext();
  const { addTask } = useContext(TaskContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTask = {
      title,
      date: new Date().toISOString(), 
    };

    console.log("Отправляемые данные:", newTask);

    try {
      const response = await apiAddTask(newTask, user.token);
      addTask(response.task); 
      onTaskAdded();
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название задачи"
      />
       <Calendar
        onChange={setDate}
        value={date}
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
};
