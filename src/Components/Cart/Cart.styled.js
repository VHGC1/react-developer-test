import styled from "styled-components";

export const Skeleton = styled("div")`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.4);
  top: 0;
`


export const WrapperCart = styled("div")`
  position: fixed;
  right: 0;
  height: 100vh;
  width: calc(1/3 * 100vw);
  background: #eee;
`