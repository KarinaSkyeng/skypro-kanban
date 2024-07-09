import { Card } from "../Card/Card";
import * as S from "./column.styled";

export const Column = ({ title, cards}) => {
  return (
    <S.Column>
      <div>
        <S.ColumnTitle>{title}</S.ColumnTitle>
        <div>
          {cards.map((card) => {
            return (
              <Card 
                key={card._id} 
                id={card._id}
                title={card.title}
                topic={card.topic} 
                date={card.date}
                />
            )
          })}                               
        </div>
      </div>      
    </S.Column>
  );
};
