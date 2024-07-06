import { Subttl } from "../../glogalStyle.styled.js";
import Calendar from "../Calendar/Calendar";
import * as S from "./popNewCard.styled.js";
import { routes } from "../../router/routes.js";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { addTask } from '../../api/tasks';
import { TaskContext } from '../../context/TasksContext';

export const PopNewCard = () => {

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

  const OnAddNewCard = () => {
    setError('')
    const title = !inputValue.title ? 'Новая задача' : inputValue.title
    const topic = !inputValue.topic ? 'Research' : inputValue.topic
    const status = !inputValue.status ? 'Без статуса' : inputValue.status
    const newCard = {
      description: inputValue.description,
      title,
      topic,
      status,
      date,
    }

    if (!inputValue.description) {
      return setError('Заполните описание')
    }
    addTask({
      task:newCard,
      token: user.token
    }).then((responce)=>{
      console.log(responce)
      setTasks(responce.tasks)
      navigate()
    }).catch((err)=>{
      setError(err.message)
    })
  }

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
            <S.PopNewCardClose href="#">
            <Link to={routes.main}>&#10006;</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm
                id="formNewCard"
                action="#"
              >
                <S.FormNewBlock>
                  <Subttl>
                    Название задачи
                  </Subttl>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus={true}
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <Subttl>
                    Описание задачи
                  </Subttl>
                  <S.FormNewArea
                    onChange={onChangeInput}
                    name="description"                    
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
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
                  <S.Orange
                  >Web Design</S.Orange>
                </S.CategoriesTheme>
                <S.CategoriesTheme 
                    name="topic"
                    value="Research"
                    onChange={onChangeInput}>
                  <S.Green
                  >Research</S.Green>
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  name="topic"
                  value="Copywriting"
                  onChange={onChangeInput}
                >
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
