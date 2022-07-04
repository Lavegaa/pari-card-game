import styled from "styled-components";

const basis = `${Math.floor(100 / 2 - 1.5 * 2)}%`;

export const Container = styled.div`
  display: flex;
  flex-basis: ${basis};
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
