import styled from "styled-components";

export const Container = styled.div<{ stage: number }>`
  display: flex;
  flex-basis: ${({ stage }) =>
    Math.floor(100 / (stage === 2 ? stage : stage / 2) - 1.5 * 2)}%;
  flex-wrap: wrap;
  margin: 1.5%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: transform 0.5s, color 0.3s;
  transform: translateZ(0);
  font-family: "Do Hyeon";
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
