import React from "react";
import countries from "../../constant/countries";
import Card from "../../components/Card";
import * as STC from "./GamePage.style";

const GamePage = () => {
  return (
    <STC.Container>
      <STC.Board>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </STC.Board>
    </STC.Container>
  );
};

export default GamePage;
