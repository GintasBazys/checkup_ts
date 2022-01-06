import styled from "styled-components";
import { white } from "styles/colors";

interface Styles {
  width?: string;
  margin?: string;
}

export const CardWrapper = styled.div<Styles>`
  width: ${({ width }) => width || ""};
  margin: ${({ margin }) => margin || ""};
  background: ${white};
  box-shadow: 0 1rem 2rem rgba(57, 53, 60, 0.08);
  border-radius: 1.5rem;
`;
