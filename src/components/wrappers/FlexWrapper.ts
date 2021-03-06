import styled from "styled-components";

interface Styles {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  padding?: string;
  margin?: string;
  wrap?: string;
  maxWidth?: string;
  minWidth?: string;
}

export const FlexWrapper = styled.div<Styles>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  min-width: ${({ minWidth }) => minWidth || ""};
  flex-wrap: ${({ wrap }) => wrap || ""};
`;
