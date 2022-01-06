import styled from "styled-components";
import { Button } from "./Button";

interface Styles {
  borderRadius?: string;
  background?: string;
  border?: string;
}

export const PrimaryButton = styled(Button)<Styles>`
  box-shadow: 0 1rem 2rem rgba(255, 155, 78, 0.24);
  &:hover:enabled {
    box-shadow: none;
    opacity: 0.9;
  }
  &:active:enabled {
    box-shadow: none;
    opacity: 0.8;
  }
  &:disabled {
    text-shadow: none;
    box-shadow: none;
    background: rgba(0, 0, 0, 0.16);
  }
`;
