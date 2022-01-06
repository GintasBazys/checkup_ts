import styled from "styled-components";
import { mobile } from "styles/breakpoints";

interface Props {
  position?: string;
  margin?: string;
  maxWidth?: string;
}

export const ContentFrameSmall = styled.div<Props>`
  position: ${({ position }) => position || "relative"};
  display: block;
  margin: ${({ margin }) => margin || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "24rem"};
  width: 100%;
  z-index: 1;
  @media ${mobile} {
    max-width: 100%;
  }
`;
