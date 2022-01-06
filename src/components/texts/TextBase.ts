import styled from "styled-components";

interface Styles {
  margin?: string;
  fontSize?: string;
  fontWeight?: number;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
}

export const TextBase = styled.p<Styles>`
  margin: ${({ margin }) => margin || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || "black"};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs(
  ({ fontWeight }: Styles) => ({
    fontWeight: fontWeight || 700,
  })
)``;