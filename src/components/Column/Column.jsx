import { Card } from "../Card/Card";

export const Column = ({ title, cards}) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
        <div className="cards">
          {cards.map((card) => {
            return (
              <Card 
                key={card.id} 
                id={card.id}
                title={card.title}
                topic={card.topic} 
                date={card.date}
                />
            )
          })}
                               
        </div>
      </div>      
    </div>
  );
}
