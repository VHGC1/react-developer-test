import styled from "styled-components";

export const WrapperProducts = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  justify-content: center;

  & li:nth-child(2) a div img {
    object-fit: cover;
    object-position: top;
  }
`


export const CardWrapper = styled("li")`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &:hover {
    box-shadow: 1px 2px 10px 1px rgba(0,0,0,0.53);
  }

  &:hover div svg {
    display: block !important;
  }
`

