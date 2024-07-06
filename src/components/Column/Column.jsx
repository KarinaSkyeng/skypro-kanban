import { Card } from "../Card/Card";
import * as S from "./column.styled";

export const Column = ({ title, cards}) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
        <S.Cards>
          {cards.map((card, index) => {
            return (
              <Card 
                key={index} 
                id={card._id}
                title={card.title}
                topic={card.topic} 
                date={card.date}
                />
            )
          })}                               
        </S.Cards>
      </S.ColumnTitle>      
    </S.MainColumn>
  );
};
