import styled from "styled-components";

export const Container = styled.div<{ stage: number }>`
  display: flex;
  flex-basis: ${({ stage }) =>
    Math.floor(100 / (stage === 2 ? stage : stage / 2) - 1.5 * 2)}%;
  flex-wrap: wrap;
  margin: 1.5%;
  border: 1px solid black;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
