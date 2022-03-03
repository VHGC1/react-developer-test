import { RiShoppingCartLine } from "react-icons/ri";
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
`;

export const CardWrapper = styled("li")`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &:hover {
    box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.53);
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
  top: -1.5rem;
  right: 0.1rem;
  background: #5ece7b;
  color: #fff;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.45rem;
`;

