import styled from "styled-components";
import { mobile } from "styles/breakpoints";

import { TextBaseBold } from "./TextBase";

interface Styles {
  padding?: string;
}

export const H1 = styled(TextBaseBold).attrs({ as: "h1" })<Styles>`
  padding: ${({ padding }) => padding || ""};
  font-size: 3rem;
  @media ${mobile} {
    font-size: 1.688rem;
  }
`;
