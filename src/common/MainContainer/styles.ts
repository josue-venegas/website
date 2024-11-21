import styled from "styled-components";

/* export const Background = styled("div")<any>`
  background-image: linear-gradient(to right, rgba(0,74,173, 0.52), rgba(203,108,230, 0.8)), url('img/mountains.png');
  background-size: cover;
` */

export const Background = styled("div")<any>`
  background-color: #252525;
`;

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 60px 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 60px 18px;
  }
`;
