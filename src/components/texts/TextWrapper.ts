import styled from "styled-components";
import { TextBase } from "./TextBase";

interface Styles {
  fontWeight?: number;
  fontStyle?: string;
}

export const TextWrapper = styled(TextBase).attrs({ as: "span" })<Styles>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: ${({ fontStyle }) => fontStyle || ""};
`;
