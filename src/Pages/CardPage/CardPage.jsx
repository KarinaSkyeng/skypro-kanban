import { Calendar } from "../../components/Calendar/Calendar";
import * as S from "./cardPage.styled.js"
import { Link, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TasksContext.jsx";

export function CardPage({ theme }) {
    const {tasks} = useContext(TaskContext);
   const params = useParams();
   const [selected, setSelected] = useState(null);
   const [card, setCard] = useState(null);
   const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
    const foundTask = tasks.find(task => task._id === params.cardId);
    setCard(foundTask);
   }, []);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteCard = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteTask(user.token, cardId);
      setTasks(res.tasks);
      navigate(routes.main);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();
    const taskData = { ...editCard, date: editCard.date.toISOString() };
    try {
      const res = await editTask({ token: user.token, cardId, taskData });
      setTasks(res.tasks);
      navigate(routes.main);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

   const handleToggleEdit = () => {
    setIsEdited(!isEdited);
  };

  console.log(card)

   if (!card) {
    return <div>Задача не найдена</div>
   } 
   
    return (
        <S.PopBrowse>
        <S.PopBrowseContainer>
            <S.PopBrowseBlock>
                <S.PopBrowseContent>
                    <S.PopBrowseTopBlock>
                        <S.PopBrowseTtl>{card.title || 'Название задачи'}</S.PopBrowseTtl>
                        <S.CategoriesTheme $themeColor={theme}>
                            <S.ThemesP>{card.topic || 'Категория задачи'}</S.ThemesP>
                        </S.CategoriesTheme>
                    </S.PopBrowseTopBlock>
                     <div>
                        <S.StatusSubttl>Статус</S.StatusSubttl>
                        <S.StatusThemes>
                            <S.StatusTheme>
                                <S.StatusThemeP>{card.status || 'Без статуса'}</S.StatusThemeP>
                            </S.StatusTheme> 
                        </S.StatusThemes>
                    </div>
                    <S.PopBrowseWrap>
                        <S.PopBrowseForm id="formBrowseCard" action="#">									
                            <S.FormBrowseBlock>
                                <S.LabelSubttl htmlFor="textArea01">Описание задачи</S.LabelSubttl>
                                <S.FormBrowseArea 
                                onChange={handleChange}
                                name="description"                                
                                id="textArea01"  
                                readOnly={!isEdited} 
                                placeholder="Введите описание задачи..."
                                value={editCard.description || ''}
                                ></S.FormBrowseArea>
                            </S.FormBrowseBlock>
                        </S.PopBrowseForm>                       
                            <Calendar selected={editCard.date} setSelected={setSelected}/>
                    </S.PopBrowseWrap>
                    <S.CategoriesThemeDown>
                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesTheme>
                            <S.ThemesP>{card.category || 'Категория задачи'}</S.ThemesP>
                        </S.CategoriesTheme>
                    </S.CategoriesThemeDown>
                    <S.PopBrowseBtnBrowse>
                        <div>
                        <S.BtnBrowse as="button" onClick={handleToggleEdit}><S.BtnBorA as="span">Редактировать задачу</S.BtnBorA></S.BtnBrowse>
                            <S.BtnBrowse as="button"><S.BtnBorA as="span">Удалить задачу</S.BtnBorA></S.BtnBrowse>
                        </div>
                        <Link to="/"><S.BtnBrowseClose as="button"><S.BtnBgA as="span">Закрыть</S.BtnBgA></S.BtnBrowseClose></Link>
                    </S.PopBrowseBtnBrowse>
                    <S.PopBrowseBtnEdit>
                        <div>
                            <S.BtnEditSave><S.BtnBgA>Сохранить</S.BtnBgA></S.BtnEditSave>
                            <S.BtnEdit><S.BtnBorA>Отменить</S.BtnBorA></S.BtnEdit>
                            <S.BtnEdit id="btnDelete"><S.BtnBorA>Удалить задачу</S.BtnBorA></S.BtnEdit>
                        </div>
                        <S.BtnBrowseClose><S.BtnBgA>Закрыть</S.BtnBgA></S.BtnBrowseClose>
                    </S.PopBrowseBtnEdit>                                            
                </S.PopBrowseContent>
            </S.PopBrowseBlock>
        </S.PopBrowseContainer>
    </S.PopBrowse>
    );
  }
  
  
  