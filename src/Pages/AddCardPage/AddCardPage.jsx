import { useNavigate } from 'react-router-dom';
import { PopNewCard } from '../../components/PopNewCard/PopNewCard';
import { routes } from '../../router/routes';

export const NewCardPage = () => {
  const navigate = useNavigate();

  // Функция для закрытия модального окна
  const closeModal = () => {
    navigate(routes.main);
  };

  return (
    <div>
      <PopNewCard onClose={closeModal} />
    </div>
  );
};
