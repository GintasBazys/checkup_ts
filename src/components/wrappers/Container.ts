import styled from "styled-components";

interface Props {
  position?: string;
  margin?: string;
  padding?: string;
}

export const Container = styled.div<Props>`
  position: ${({ position }) => position || "relative"};
  display: block;
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "0 1rem"};
  max-width: 74.75rem;
`;
