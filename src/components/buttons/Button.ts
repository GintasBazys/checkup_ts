import styled from "styled-components";
import { white } from "styles/colors";

interface Styles extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  display?: string;
  maxWidth?: string;
  minWidth?: string;
  margin?: string;
  background?: string;
  width?: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
}

export const Button = styled.button<Styles>`
  display: ${({ display }) => display || "inline-block"};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || "0.8rem 1.5rem"};
  max-width: ${({ maxWidth }) => maxWidth || "16rem"};
  min-width: ${({ minWidth }) => minWidth || "none"};
  width: ${({ width }) => width || ""};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || white};
  background: ${({ background }) => background || "transparent"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "8rem"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
