import { useState } from 'react';
import { useUserContext } from '../../context/useUserContext';
import { addTask } from '../../api/tasks';

export const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const { user } = useUserContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTask = {
      title,
      date: new Date().toISOString(), 
    };
    await addTask(newTask, user.token);
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название задачи"
      />
      <button type="submit">Добавить задачу</button>
    </form>
  );
};
