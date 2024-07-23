import { Subttl } from "../../glogalStyle.styled.js";
import { Calendar } from "../Calendar/Calendar";
import * as S from "./popNewCard.styled.js";
import { routes } from "../../router/routes.js";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { addTask as apiAddTask } from '../../api/tasks';
import { useTask } from '../../context/TasksContext';
import { useNavigate } from "react-router-dom"; 

export const PopNewCard = () => {
  const {user} = useContext(UserContext)
  const { addTask } = useTask();
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [date, setDate] = useState(new Date())
  const [inputValue, setInputValue] = useState({
    title: '',
    topic: '',
    status: '',
    description:'',
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  const OnAddNewCard = async () => {
    setError('')
    const title = !inputValue.title.trim() ? 'Новая задача' : inputValue.title
    const topic = !inputValue.topic.trim() ? 'Research' : inputValue.topic
    const status = !inputValue.status.trim() ? 'Без статуса' : inputValue.status
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
      const response = await apiAddTask(newCard, user.token);
      addTask(response.task);
      setIsModalOpen(false); // Закрываем модальное окно
      navigate(routes.main);
    } catch (err) {
      setError(err.message);
    }
  };

  // const onCloseModal = () => {
  //   navigate(routes.main); 
  // };

  const onChangeInput = (e) => {
    const {value, name} = e.target
    setInputValue({...inputValue, [name]: value})
  }

  return (
    isModalOpen && (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
             <S.PopNewCardClose onClick={() => setIsModalOpen(false)}>&#10006;</S.PopNewCardClose>
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
                    value={inputValue.title}
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <Subttl>Описание задачи</Subttl>
                  <S.FormNewArea
                    onChange={onChangeInput}
                    name="description"                    
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={inputValue.description}
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar onChange={setDate} value={date} />              
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
              <S.CategoriesThemes>
              <S.InputRadio
                      type="radio"
                      id="radio1"
                      name="topic"
                      value="Web Design"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel1 htmlFor="radio1">Web Design</S.RadioToolbarLabel1>

                    <S.InputRadio
                      type="radio"
                      id="radio2"
                      name="topic"
                      value="Research"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>

                    <S.InputRadio
                      type="radio"
                      id="radio3"
                      name="topic"
                      value="Copywriting"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>
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
    )
  );  
};