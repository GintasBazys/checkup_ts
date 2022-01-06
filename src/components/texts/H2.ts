import styled from "styled-components";
import { mobile } from "../../styles/breakpoints";
import { TextBaseBold } from "./TextBase";

interface Styles {
  padding?: string;
}

export const H2 = styled(TextBaseBold).attrs({ as: "h2" })<Styles>`
  padding: ${({ padding }) => padding || ""};
  font-size: 2rem;
  @media ${mobile} {
    font-size: 1.5rem;
  }
`;
