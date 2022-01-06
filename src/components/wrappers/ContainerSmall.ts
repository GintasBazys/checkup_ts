import styled from "styled-components";

interface Props {
  margin?: string;
  padding?: string;
  position?: string;
  maxWidth?: string;
}

export const ContainerSmall = styled.div<Props>`
  position: ${({ position }) => position || "relative"};
  display: block;
  max-width: ${({ maxWidth }) => maxWidth || "49.5rem"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || ""};
  padding: 0 1rem;
`;
