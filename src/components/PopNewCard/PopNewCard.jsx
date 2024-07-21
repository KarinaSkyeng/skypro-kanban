import { Subttl } from "../../glogalStyle.styled.js";
import Calendar from "../Calendar/Calendar";
import * as S from "./popNewCard.styled.js";
import { routes } from "../../router/routes.js";
import { useContext, useState } from "react";
//import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { addTask } from '../../api/tasks';
import { TaskContext } from '../../context/TasksContext';
import { useNavigate } from "react-router-dom"; 

export const PopNewCard = ({ onClose }) => {
  const {user} = useContext(UserContext)
  const { setTasks } = useContext(TaskContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [date] = useState(new Date)
  const [inputValue, setInputValue] = useState({
    title: '',
    topic: '',
    status: '',
    description:'',
  });

  const OnAddNewCard = async () => {
    setError('')
    const title = !inputValue.title ? 'Новая задача' : inputValue.title
    const topic = !inputValue.topic ? 'Research' : inputValue.topic
    const status = !inputValue.status ? 'Без статуса' : inputValue.status
    const newCard = {      
      title,
      topic,
      status,
      description: inputValue.description.trim() || '',
      date: date.toISOString(),
    };

    if (!newCard.description) {
      return setError('Заполните описание')
    }

    try {
      const response = await addTask(newCard, user.token);
      setTasks((prevTasks) => [...prevTasks, response.task]); 
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  const onCloseModal = () => {
    navigate(routes.main); // Переход на главную страницу или другой маршрут для закрытия модального окна
  };

  const onChangeInput = (e) => {
    const {value, name} = e.target
    setInputValue({...inputValue, [name]: value})
  }

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
             <S.PopNewCardClose onClick={onCloseModal}>&#10006;</S.PopNewCardClose>
              <S.PopNewCardWrap>
               <S.PopNewCardForm
                id="formNewCard"
                action="#">
                 <S.FormNewBlock> 
                  <Subttl>Название задачи</Subttl>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus={true}
                    onChange={onChangeInput}
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <Subttl>Описание задачи</Subttl>
                  <S.FormNewArea
                    onChange={onChangeInput}
                    name="description"                    
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue=""
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />              
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
              <S.CategoriesThemes>
                <S.CategoriesTheme 
                    name="topic"
                    value="Web Design"
                    onChange={onChangeInput}>
                  <S.Orange>Web Design</S.Orange>
                </S.CategoriesTheme>
                <S.CategoriesTheme 
                    name="topic"
                    value="Research"
                    onChange={onChangeInput}>
                  <S.Green>Research</S.Green>
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  name="topic"
                  value="Copywriting"
                  onChange={onChangeInput}>
                  <S.Purple>Copywriting</S.Purple>
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            {error && error}
            <S.FormNewCreate onClick={OnAddNewCard}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}