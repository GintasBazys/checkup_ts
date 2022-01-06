import styled from "styled-components";

import { TextBase } from "./TextBase";

interface Styles {
  cursor?: string;
  opacity?: string;
}

export const Small = styled(TextBase)<Styles>`
  font-size: 0.875rem;
  cursor: ${({ cursor }) => cursor || ""};
  opacity: ${({ opacity }) => opacity || ""};
`;
