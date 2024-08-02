import { useParams, useState, useContext } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Добавляем импорт useNavigate
import Calendar from "../../components/Calendar/Calendar.jsx";
import { routes } from "../../router/routes.js";
import * as S from "./popBrowse.styled";
import { Subttl, Orange, themeColor } from "../../glogalStyle.styled";
import { editTask, deleteTask } from "../../api/tasks.js";
import { UserContext } from "../../context/UserContext"; // Assuming you have a UserContext
import { TaskContext } from "../../context/TaskContext"; // Assuming you have a TaskContext

export const PopBrowse = () => {
  const { cardId } = useParams();
  const [isEdited, setIsEdited] = useState(false);
  const { user } = useContext(UserContext);
  const { tasks, setTasks } = useContext(TaskContext); // Используем tasks и setTasks из TaskContext
  const navigate = useNavigate();

  const openedCard = tasks.find((task) => task._id === cardId);
  const [selectedDate, setSelectedDate] = useState(openedCard?.date);

  const [editCard, setEditCard] = useState({
    title: openedCard?.title,
    description: openedCard?.description,
    topic: openedCard?.topic,
    status: openedCard?.status,
    date: openedCard?.date,
  });

  const deleteCard = () => {
    deleteTask({ token: user.token, id: cardId })
      .then((newTasks) => {
        setTasks(newTasks.tasks);
        navigate(routes.main);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = { ...editCard, date: selectedDate };
    editTask({ token: user.token, id: cardId, taskData })
      .then((newTasks) => {
        setTasks(newTasks.tasks);
        navigate(routes.main);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setEditCard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!openedCard) {
    navigate(routes.main);
    return null;
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи: {openedCard.title}</S.PopBrowseTtl>
              <S.BrowseCategoriesTheme>
                <Orange $themeColor={themeColor[openedCard.topic]}></Orange>
              </S.BrowseCategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.BrowseStatusP>Статус</S.BrowseStatusP>
              {!isEdited && <S.StatusThemeLabel_1>{editCard.status}</S.StatusThemeLabel_1>}
              {isEdited && (
                <S.BrowseStatusThemes>
                  {["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((status, index) => (
                    <div key={index}>
                      <S.OpenedCardTheme
                        type="radio"
                        checked={editCard.status === status}
                        id={`radio${index}`}
                        name="status"
                        value={status}
                        onChange={onChangeInput}
                      />
                      <S.StatusThemeLabel htmlFor={`radio${index}`}>{status}</S.StatusThemeLabel>
                    </div>
                  ))}
                </S.BrowseStatusThemes>
              )}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" onSubmit={handleFormSubmit}>
                <S.FormBrowseBlock>
                  <Subttl>Описание задачи</Subttl>
                  <S.FormBrowseArea
                    onChange={onChangeInput}
                    name="description"
                    readOnly={!isEdited}
                    placeholder="Введите описание задачи..."
                    value={editCard.description || ""}
                    disabled={!isEdited}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </S.PopBrowseWrap>
            {!isEdited ? (
              <S.PopBrowseBtnBrowse>
                <S.ButtonGroup>
                  <S.ButtonChangeDelete onClick={() => setIsEdited(true)}>Редактировать задачу</S.ButtonChangeDelete>
                  <S.ButtonChangeDelete onClick={deleteCard}>Удалить задачу</S.ButtonChangeDelete>
                </S.ButtonGroup>
                <S.LinkClose to={routes.main}>
                  <S.ButtonClose>Закрыть</S.ButtonClose>
                </S.LinkClose>
              </S.PopBrowseBtnBrowse>
            ) : (
              <S.PopBrowseBtnBrowse>
                <S.ButtonGroup>
                  <S.ButtonChangeDelete type="submit">Сохранить</S.ButtonChangeDelete>
                  <S.LinkClose to={routes.main}>
                    <S.ButtonClose>Закрыть</S.ButtonClose>
                  </S.LinkClose>
                  <S.ButtonChangeDelete onClick={() => setIsEdited(false)}>Отменить</S.ButtonChangeDelete>
                  <S.ButtonChangeDelete onClick={deleteCard}>Удалить задачу</S.ButtonChangeDelete>
                </S.ButtonGroup>
              </S.PopBrowseBtnBrowse>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
