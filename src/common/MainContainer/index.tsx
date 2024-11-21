import { Background, StyledContainer } from "./styles";
import { ContainerProps } from "../types";
import { Fade } from "react-awesome-reveal";

const Container = ({ border, children }: ContainerProps) => (
  <Fade direction="right" triggerOnce={true}>
    <Background>
      <StyledContainer border={border}>{children}</StyledContainer>
    </Background>
  </Fade>
);

export default Container;
