import { Calendar } from "../../components/Calendar/Calendar";
import * as S from "./cardPage.styled.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import { routes } from "../../router/routes.js";
import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../context/TasksContext.jsx";
import { editTask, deleteTask } from "../../api/tasks.js";
import { UserContext } from "../../context/UserContext";

export function CardPage() {
  const { tasks } = useContext(TaskContext);
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
  }, [tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteCard = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteTask(user.token, card._id);
      setTasks(res.tasks);
      navigate(routes.main);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();
    const taskData = { ...card, date: card.date.toISOString() };
    try {
      const res = await editTask({ token: user.token, cardId: card._id, taskData });
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
console.log("Proverka", card)

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
                <S.PopBrowseColor topic={card.topic}> 
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
                      <S.StatusThemeLabel htmlFor={`radio${index}`}>
                        {status}
                      </S.StatusThemeLabel>
                    </div>
                  ))}
                </S.BrowseStatusThemes>
              ) : (
                <S.StatusThemeLabel_1></S.StatusThemeLabel_1>
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
              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                {isEdited ? (
                  <>
                    <S.ButtonChangeDelete type="submit" onClick={handleEditTask}>Сохранить</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete onClick={handleToggleEdit}>Отменить</S.ButtonChangeDelete>
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
