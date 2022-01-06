import { TextBase } from "components";
import styled from "styled-components";
import { mobile } from "styles/breakpoints";

interface Styles {
  padding?: string;
}

export const Paragraph = styled(TextBase)<Styles>`
  padding: ${({ padding }) => padding || ""};
  font-size: 1.25rem;
  @media ${mobile} {
    font-size: 1.125rem;
  }
`;
