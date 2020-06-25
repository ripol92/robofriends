import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  const robotCards = robots.map((robot, i) => {
     return <Card key={robot.id} id={robot.id} email={robot.email} name={robot.name}/>
  });
  return (
      <div>
          {robotCards}
      </div>
  );
};
export default CardList;