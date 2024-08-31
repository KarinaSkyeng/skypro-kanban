
import * as S from "./calendar.styled.js";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export const Calendar = ({ onChange, selected }) => {

  let footer;
  
  if (!selected) {
    footer = <S.CalendarContentDiv>Выберите срок исполнения</S.CalendarContentDiv>;
  } else {
    const currentDate= selected.toLocaleDateString("ru-US")
    footer = (
    <S.CalendarContentDiv>
      <S.DeadLineLable>Срок исполнения:</S.DeadLineLable>
       {""} 
      <S.DeadLineDate>{currentDate}</S.DeadLineDate>
      </S.CalendarContentDiv> 
  );    
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
