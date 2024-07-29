
import * as S from "./calendar.styled.js";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { useState } from "react";


export const Calendar = () => {
  const [selected, setSelected] = useState(new Date)
  const currentDate= selected.toLocaleDateString("ru-US")
  let footer = <S.CalendarContentP>Выберите срок исполнения</S.CalendarContentP>;
  if (setSelected) {
    footer = <p>Срок исполнения:{""} {currentDate}</p>;    
  }

  return (
    <S.CalendarContent>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.StyledDayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        locale={ru}
      />
    </S.CalendarContent>
  );
}
