
import * as S from "./calendar.styled.js";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";
import { useState } from "react";


export default function Calendar() {

  const [date, setDate] = useState(new Date)
  
  let footer = <S.CalendarContentP>Пожалуйста, введите дату</S.CalendarContentP>;
  if (setDate) {
    footer = (
      <S.CalendarContentP>
        Вы выбрали {format(date, "PP", { locale: ru })}.
      </S.CalendarContentP> 
    );   
  }

  return (
    <S.Calendar>
      <S.StyledDayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={footer}
        locale={ru}
      />
    </S.Calendar>
  );
}
