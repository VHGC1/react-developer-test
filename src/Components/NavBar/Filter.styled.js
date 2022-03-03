import styled, { css } from "styled-components";

export const CategoryButton = styled("button")`
  background: none;
  height: 5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  padding: 0 1rem;
  font-family: inherit;

  ${({ value, category }) =>
    value === category &&
    css`
      color: #5ece7b;
      border-bottom: 3px solid #5ece7b;
    `}
  
  &:hover {
    color: #5ece7b;
    border-bottom: 3px solid #5ece7b;
  }
`;
