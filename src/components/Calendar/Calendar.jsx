
import * as S from "./calendar.styled.js";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export const Calendar = ({ onChange, selected }) => {

  let footer;
  
  if (!selected) {
    footer = <S.CalendarContentP>Выберите срок исполнения</S.CalendarContentP>;
  } else {
    const currentDate= selected.toLocaleDateString("ru-US")
    footer = <p>Срок исполнения:{""} {currentDate}</p>;    
  }

  return (
    <S.CalendarContent>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.StyledDayPicker
        mode="single"
        selected={selected}
        onSelect={onChange}
        locale={ru}
      />
      {footer}
    </S.CalendarContent>
  );
}
