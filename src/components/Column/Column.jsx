import { Card } from "../Card/Card";
import * as S from "./column.styled";

export const Column = ({ title, cards}) => {
  return (
    <S.MainColumn>
      <div className="column__title">
        <p>{title}</p>
        <div className="cards">
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
        </div>
      </div>      
    </S.MainColumn>
  );
};
