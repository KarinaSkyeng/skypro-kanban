import { Calendar } from "../Calendar/Calendar";
import * as S from "./popNewCard.styled.js";
import { routes } from "../../router/routes.js";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { TaskContext } from '../../context/TasksContext';
import { addTask as addTaskApi } from '../../api/tasks';
import { useNavigate } from "react-router-dom"; 

export const PopNewCard = ({ onClose, taskPosition }) => {
  const {user} = useContext(UserContext);
  const { setTasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [date, setDate] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: '',
    topic: '',
    status: '',
    description:'',
  });
  
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
      date: date ? date.toISOString() : null,
    };

    if (!newCard.description) {
      return setError('Заполните описание')
    }

    try {
      const response = await addTaskApi(newCard, user.token);
      setTasks(response.tasks);
      onClose();  
      navigate(routes.main);
    } catch (err) {
      setError(err.message);
    }
  };

  const onCloseModal = () => {
    onClose(); 
  };

  const onChangeInput = (e) => {
    const {value, name} = e.target
    setInputValue({...inputValue, [name]: value});
  };

  return (    
    <S.PopNewCard style={{ top: taskPosition?.top, left: taskPosition?.left }}>
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
                  <S.Subttl>Название задачи</S.Subttl>
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
                  <S.Subttl>Описание задачи</S.Subttl>
                  <S.FormNewArea
                    onChange={onChangeInput}
                    name="description"                    
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={inputValue.description}>                      
                    </S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar onChange={setDate} selected={date} />              
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
                      checked={inputValue.topic === 'Web Design'}
                    />
                    <S.RadioToolbarLabel1 htmlFor="radio1" checked={inputValue.topic === 'Web Design'}>Web Design</S.RadioToolbarLabel1>

                    <S.InputRadio
                      type="radio"
                      id="radio2"
                      name="topic"
                      value="Research"
                      onChange={onChangeInput}
                      checked={inputValue.topic === 'Research'}
                    />
                    <S.RadioToolbarLabel2 htmlFor="radio2" checked={inputValue.topic === 'Research'}>Research</S.RadioToolbarLabel2>

                    <S.InputRadio
                      type="radio"
                      id="radio3"
                      name="topic"
                      value="Copywriting"
                      onChange={onChangeInput}
                      checked={inputValue.topic === 'Copywriting'}
                    />
                    <S.RadioToolbarLabel3 htmlFor="radio3" checked={inputValue.topic === 'Copywriting'}>Copywriting</S.RadioToolbarLabel3>
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