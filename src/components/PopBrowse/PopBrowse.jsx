import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Calendar } from "../../components/Calendar/Calendar.jsx";
import { routes } from "../../router/routes.js";
import * as S from "./popBrowse.styled";
import { Subttl, themeColor } from "../../glogalStyle.styled";
import { editTask, deleteTask } from "../../api/tasks.js";
import { UserContext } from "../../context/UserContext";
import { TaskContext } from "../../context/TasksContext";

export const PopBrowse = () => {
  const { cardId } = useParams();
  const { user } = useContext(UserContext);
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const openedCard = tasks.find((task) => task.id === cardId);
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState("");

  const [editCard, setEditCard] = useState({
    title: "",
    description: "",
    topic: "",
    status: "",
    date: new Date(),
  });

  useEffect(() => {
   
    if (openedCard) {
      setEditCard({
        title: openedCard.title,
        description: openedCard.description,
        topic: openedCard.topic,
        status: openedCard.status,
        date: new Date(openedCard.date),
      });
    } else {
      navigate(routes.main);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditCard((prev) => ({ ...prev, [name]: value }));
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
                value={editCard.title}
                readOnly={!isEdited}
              />
              <S.BrowseCategoriesTheme>
                <S.PopBrowseColor $themeColor={themeColor[editCard.topic]} />
              </S.BrowseCategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.BrowseStatusP>Статус</S.BrowseStatusP>
              {isEdited ? (
                <S.BrowseStatusThemes>
                  {["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((status, index) => (
                    <div key={index}>
                      <S.OpenedCardTheme
                        type="radio"
                        checked={editCard.status === status}
                        id={`radio${index}`}
                        name="status"
                        value={status}
                        onChange={handleChange}
                      />
                      <S.StatusThemeLabel htmlFor={`radio${index}`}>{status}</S.StatusThemeLabel>
                    </div>
                  ))}
                </S.BrowseStatusThemes>
              ) : (
                <S.StatusThemeLabel_1>{editCard.status}</S.StatusThemeLabel_1>
              )}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" onSubmit={handleEditTask}>
                <S.FormBrowseBlock>
                  <Subttl>Описание задачи</Subttl>
                  <S.FormBrowseArea
                    onChange={handleChange}
                    name="description"
                    readOnly={!isEdited}
                    placeholder="Введите описание задачи..."
                    value={editCard.description}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selectedDate={editCard.date} setSelectedDate={(date) => setEditCard((prev) => ({ ...prev, date }))} />
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.ButtonGroup>
                {isEdited ? (
                  <>
                    <S.ButtonChangeDelete type="submit">Сохранить</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete onClick={handleToggleEdit}>Отменить</S.ButtonChangeDelete>
                  </>
                ) : (
                  <>
                    <S.ButtonChangeDelete onClick={handleToggleEdit}>Редактировать задачу</S.ButtonChangeDelete>
                    <S.ButtonChangeDelete onClick={handleDeleteCard}>Удалить задачу</S.ButtonChangeDelete>
                  </>
                )}
              </S.ButtonGroup>
              <S.LinkClose to={routes.main}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </S.LinkClose>
              {error && <p>{error}</p>}
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
