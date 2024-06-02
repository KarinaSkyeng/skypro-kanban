import { Card } from "../Card";
export const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
       <Card className="_orange" itemTitle="Web Design" />
       <Card className="_green" itemTitle="Research" />
       <Card itemTitle="Web Design" />
       <Card itemTitle="Copywriting" />
       
      </div>
    </div>
  );
}
