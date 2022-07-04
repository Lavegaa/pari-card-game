import React from "react";
import * as STC from "./Card.style";

interface ICardProps {
  data: string;
  handleClick: () => void;
}

const Card = ({ data, handleClick }: ICardProps) => {
  return (
    <STC.Container id={data} onClick={handleClick}>
      <STC.Wrapper>{data}</STC.Wrapper>
    </STC.Container>
  );
};

export default Card;
