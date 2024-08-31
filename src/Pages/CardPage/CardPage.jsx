import { Calendar } from "../../components/Calendar/Calendar";
import * as S from "./cardPage.styled.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useState, useContext, useEffect } from "react";
import { editTask, deleteTask } from "../../api/tasks.js";
import { UserContext } from "../../context/UserContext";
import { useTaskContext } from "../../context/useTaskContext.jsx";

export function CardPage() {
  const { tasks, setTasks } = useTaskContext();
  const params = useParams();
  const [selected, setSelected] = useState(null);
  const { user } = useContext(UserContext);
  const [card, setCard] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundTask = tasks.find((task) => task._id === params.cardId);
    setCard(foundTask);
    if (foundTask && foundTask.date) {
      setSelected(new Date(foundTask.date)); 
    }
  }, [tasks, params.cardId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "status") {
      setCard((prev) => ({ ...prev, status: value }));
    } else if (name === "date") {
      setCard((prev) => ({ ...prev, [name]: new Date(value) }));
    } else {
      setCard((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDateChange = (date) => {
    if (date) { // Убедитесь, что дата выбрана
      setSelected(date); // Обновляем состояние выбранной даты
      setCard((prev) => ({ ...prev, date: date.toISOString() })); // Обновляем состояние задачи
    }
  };

  const handleDeleteCard = async (e) => {
    e.preventDefault();
    try {
      await deleteTask(card._id, user.token); 
     
      setTasks(prevTasks => prevTasks.filter(task => task._id !== card._id));
      navigate(routes.main);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();

    const taskDate = typeof card.date === 'string' ? new Date(card.date) : card.date;
    
    if (!(taskDate instanceof Date) || isNaN(taskDate.getTime())) {
      setError('Некорректная дата');
      return;
    }

    const taskData = { ...card, date: taskDate.toISOString() };

    try {
      const res = await editTask(user.token, card._id, { editTaskData: taskData });
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

  if (!card) {
    return <div>Задача не найдена</div>;
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl
                onChange={handleChange}
                type="text"
                name="title"
                value={card.title}
                readOnly={!isEdited}
              >
                {card.title || "Название задачи"}
              </S.PopBrowseTtl>
              <S.CategoriesTheme>
                <S.PopBrowseColor $topic={card.topic}> 
                <S.CategoriesThemesP>
                  {card.topic || "Категория задачи"}
                </S.CategoriesThemesP>
                </S.PopBrowseColor>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.BrowseStatusP>Статус</S.BrowseStatusP>
              {isEdited ? (
                <S.BrowseStatusThemes>
                  {[
                    "Без статуса",
                    "Нужно сделать",
                    "В работе",
                    "Тестирование",
                    "Готово",
                  ].map((status, index) => (
                    <div key={index}>
                      <S.OpenedCardTheme
                        type="radio"
                        checked={card.status === status}
                        id={`radio${index}`}
                        name="status"
                        value={status}
                        onChange={handleChange}
                      />
                      <S.StatusThemeLabel htmlFor={`radio${index}`} $isSelected={card.status === status} >
                        {status}
                      </S.StatusThemeLabel>
                    </div>
                  ))}
                </S.BrowseStatusThemes>
              ) : (
                <S.StatusThemeLabel_1>{card.status || "Без статуса"}</S.StatusThemeLabel_1>
              )}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.LabelSubttl htmlFor="textArea01">
                    Описание задачи
                  </S.LabelSubttl>
                  <S.FormBrowseArea
                    onChange={handleChange}
                    name="description"
                    id="textArea01"
                    readOnly={!isEdited}
                    placeholder="Введите описание задачи..."
                    value={card.description || ""}
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>                
              </S.PopBrowseForm>
              <Calendar selected={selected} onChange={handleDateChange} />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                {isEdited ? (
                  <>
                    <S.ButtonSave type="submit" onClick={handleEditTask}>Сохранить</S.ButtonSave>
                    <S.ButtonChangeDelete onClick={handleToggleEdit}>Отменить</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete onClick={handleDeleteCard}>Удалить задачу</S.ButtonChangeDelete>
                  </>
                ) : (
                  <>
                    <S.ButtonChangeDelete onClick={handleToggleEdit}>Редактировать задачу</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete onClick={handleDeleteCard}>Удалить задачу</S.ButtonChangeDelete>
                  </>
                )}
              </S.ButtonGroup>
              <Link to={routes.main}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </Link>
              {error && <p>{error}</p>}
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
