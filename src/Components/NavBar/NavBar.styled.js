import styled from "styled-components";

export const Header = styled("header")`
  position: fixed;
  top: 0;
  width: 100%;
`
export const Container = styled("div")`
  background: #fff;
`

export const Nav = styled("nav")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

export const Wrapper = styled("div")`
  display: flex;

  & div:nth-child(1) {
    margin-right: 3rem;
  }

  & div {
    cursor: pointer;
  }
`
