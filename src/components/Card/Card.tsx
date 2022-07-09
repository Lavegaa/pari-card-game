import React from "react";
import { useParams } from "react-router-dom";
import * as STC from "./Card.style";

interface ICardProps {
  data: string;
  handleClick: () => void;
}

const Card = ({ data, handleClick }: ICardProps) => {
  const { stage } = useParams();
  return (
    <STC.Container id={data} stage={Number(stage)} onClick={handleClick}>
      <STC.Wrapper>{data}</STC.Wrapper>
    </STC.Container>
  );
};

export default Card;
