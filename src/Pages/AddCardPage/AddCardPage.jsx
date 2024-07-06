import { useState } from "react";
import { PopNewCard } from "../../components/PopNewCard/PopNewCard";
import { TaskProvider } from "../../context/TasksContext";

export const NewCardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TaskProvider>
      <div>      
        {isModalOpen && <PopNewCard onClose={() => setIsModalOpen(false)} />}
      </div>
    </TaskProvider>
  );
};