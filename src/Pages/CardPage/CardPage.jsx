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

   useEffect(() => {
    const foundTask = tasks.find(task => task._id === params.id);
    setCard(foundTask);
   }, [params.id, tasks]);

   if (!card) {
    return <div>Задача не найдена</div>
   } 

    return (
        <S.PopBrowse>
        <S.PopBrowseContainer>
            <S.PopBrowseBlock>
                <S.PopBrowseContent>
                    <S.PopBrowseTopBlock>
                        <S.PopBrowseTtl>{card.name || 'Название задачи'}</S.PopBrowseTtl>
                        <S.CategoriesTheme $themeColor={theme}>
                            <S.ThemesP>{card.category || 'Категория задачи'}</S.ThemesP>
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
                                name="text" 
                                id="textArea01"  
                                readOnly 
                                placeholder="Введите описание задачи..."
                                value={card.description || ''}
                                ></S.FormBrowseArea>
                            </S.FormBrowseBlock>
                        </S.PopBrowseForm>                       
                            <Calendar selected={selected} setSelected={setSelected}/>
                    </S.PopBrowseWrap>
                    <S.CategoriesThemeDown>
                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesTheme>
                            <S.ThemesP>{card.category || 'Категория задачи'}</S.ThemesP>
                        </S.CategoriesTheme>
                    </S.CategoriesThemeDown>
                    <S.PopBrowseBtnBrowse>
                        <div>
                        <S.BtnBrowse as="button"><S.BtnBorA as="span">Редактировать задачу</S.BtnBorA></S.BtnBrowse>
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
  
  
  