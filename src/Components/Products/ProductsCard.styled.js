import styled from "styled-components";

export const WrapperProducts = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  justify-content: center;

  & a:nth-child(2) img {
    object-fit: cover;
    object-position: top;
  }
`


export const CardWrapper = styled("li")`
  display: flex;
  flex-direction: column;
  /* box-shadow: 1px 1px 1px 1px; */
`

