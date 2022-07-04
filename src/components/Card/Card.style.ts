import styled from "styled-components";

const basis = `${Math.floor(100 / 3 - 1.5)}%`;

export const Container = styled.div`
  display: flex;
  flex-basis: ${basis};
  flex-wrap: wrap;
  background-color: red;
  margin: 1.5%;
  &:nth-child(3n-1) {
    background-color: yellow;
    margin: 1.5% 0;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
`;
