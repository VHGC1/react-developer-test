import { RiShoppingCartLine } from "react-icons/ri";
import styled from "styled-components";

export const WrapperProducts = styled("ul")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  justify-content: center;

  & p {
    margin-bottom: .25rem;
  }

  & li:nth-child(2) a div img {
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 35rem) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled("li")`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &:hover {
    box-shadow: 4px 4px 33px -2px rgb(0 0 0 / 10%);
  }

  &:hover div svg {
    display: block !important;
  }
`;

export const WrapperCardInfo = styled("div")`
  position: relative;
`;

export const ShoppingCartLine = styled(RiShoppingCartLine)`
  display: none;
  cursor: pointer;
  position: absolute;
  top: -2.35rem;
  right: 0;
  background: #5ece7b;
  color: #fff;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.45rem;
`;

