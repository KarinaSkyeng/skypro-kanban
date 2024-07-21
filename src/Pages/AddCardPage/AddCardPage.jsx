import { useState } from "react";
import { PopNewCard } from "../../components/PopNewCard/PopNewCard";

export const NewCardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (    
      <div>              
        {isModalOpen && <PopNewCard onClose={() => setIsModalOpen(false)} />}
      </div>   
  );
};