import { useNavigate, useLocation } from 'react-router-dom';
import { PopNewCard } from '../../components/PopNewCard/PopNewCard';
import { routes } from '../../router/routes';

export const NewCardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Функция для закрытия модального окна
  const closeModal = () => {
    navigate(routes.main);
  };

  // Проверка на наличие параметра в URL для отображения модального окна
  const isModalOpen = location.pathname === routes.add;

  return (
    <div>
      {isModalOpen && <PopNewCard onClose={closeModal} />}
    </div>
  );
};
