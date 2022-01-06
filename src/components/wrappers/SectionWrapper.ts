import styled from "styled-components";
import { mobile } from "styles/breakpoints";

interface Props {
  hasBackground?: boolean;
  background?: string;
}

export const SectionWrapper = styled.div<Props>`
  display: block;
  margin: 3rem 0;
  @media ${mobile} {
    margin: 2.5rem 0;
  }
`;
