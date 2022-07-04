import React from "react";
import Card from "../../components/Card";
import useGamePage from "./useGamePage";
import * as STC from "./GamePage.style";

const GamePage = () => {
  const { countriesArr, handleClick } = useGamePage();
  return (
    <STC.Container>
      <STC.Board>
        {countriesArr.map((data) => {
          return (
            <Card
              handleClick={() => handleClick(data)}
              key={data}
              data={data}
            />
          );
        })}
      </STC.Board>
    </STC.Container>
  );
};

export default GamePage;
